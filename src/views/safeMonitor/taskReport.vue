<template>
  <div class="report-container">
    <el-row>
      <el-col :span="8">
        <el-form
          label-width="70px"
          size="small"
          label-position="right"
          :model="form.data"
        >
          <el-form-item label="任务ID">
            <el-input
              v-model="form.data.id"
              placeholder="请输入任务ID"
            ></el-input>
          </el-form-item>
          <el-form-item label="任务名称">
            <el-input
              v-model="form.data.name"
              placeholder="请输入任务名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="监测频率">
            <el-select
              v-model="form.data.every"
              placeholder="请选择监测频率"
              clearable
            >
              <el-option
                :value="1"
                label="24小时"
              ></el-option>
              <el-option
                :value="7"
                label="每周"
              ></el-option>
              <el-option
                :value="30"
                label="每月"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="敏感词">
            <el-input
              v-model="form.data.keywords"
              placeholder="请输入敏感词"
            ></el-input>
          </el-form-item>
          <el-form-item label="创建时间">
            <el-date-picker
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              format="yyyy-MM-dd HH:mm:ss"
              value-format="yyyy-MM-dd HH:mm:ss"
              v-model="timeList"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="危险等级">
            <el-checkbox-group
              v-model="form.data.max_risk_level"
              placeholder="请选择危险等级"
            >
              <el-checkbox :label="0">低危</el-checkbox>
              <el-checkbox :label="1">中危</el-checkbox>
              <el-checkbox :label="2">高危</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="submit"
            >查询</el-button>
            <el-button @click="clearForm">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button
          type="danger"
          size="small"
          @click="handleDeletes"
          :disabled="selections.length==0"
        >删除</el-button>
      </el-col>
    </el-row>
    <el-row>
      <common-table
        tableType="taskReport"
        :handlers='handlers'
        @changeSelection="changeSelection"
        @handleView='handleView'
        @handleDelete='handleDelete'
      ></common-table>
    </el-row>
  </div>
</template>

<script>
export default {
  components: {
    commonTable: () => import("comp/safeMonitorComp/commomTable.vue")
  },
  data() {
    return {
      handlers: [
        {
          Chi: "查看",
          Eng: "View"
        },
        {
          Chi: "删除",
          Eng: "Delete"
        }
      ],
      form: {
        data: {
          id: "",
          name: "",
          every: "",
          max_risk_level: [],
          keywords: "",
          start_time: "",
          end_time: ""
        }
      },
      timeList: [],
      selections: []
    };
  },
  watch: {
    timeList: function(val, oldVal) {
      if (val) {
        this.form.data.start_time = val[0];
        this.form.data.end_time = val[1];
      } else {
        this.form.data.start_time ='';
        this.form.data.end_time = '';
      }
    }
  },
  methods: {
    submit() {
      this.$store.dispatch("safeMonitor/changeSearchParams", {
        type: "taskReport",
        search: this.form.data
      });
    },
    clearForm() {
      this.form.data = {
        id: "",
        name: "",
        every: "",
        max_risk_level: [],
        keywords: "",
        start_time: "",
        end_time: ""
      };
      this.timeList = [];
    },
    changeSelection(data) {
      this.selections = data.selection;
    },
    handleView(data) {
      // console.log("handleView", data);
      this.$router.push({
        name: "主体监测报告",
        params: { taskReportId: data.row.id }
      });
    },
    handleDeletes() {
      let deleteList = [];
      this.selections.map(value => {
        deleteList.push(value.id);
      });
      this.deleteList(deleteList);
    },
    handleDelete(data) {
      this.deleteList([data.row.id]);
    },
    deleteList(id) {
      this.$confirm("确认删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(_ => {
          this.$store.dispatch("safeMonitor/deleteList", {
            type: "taskReport",
            data: {
              targets: id
            }
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  created() {
    // console.log(this.$store.state.safeMonitor);
    let search = this.$store.state.safeMonitor.taskReport.pageInfo.search;
    if (search) {
      this.form.data = search;
      this.timeList = [search.start_time, search.end_time];
    }
  }
};
</script>

<style lang="scss" scoped>
.el-checkbox__label {
  width: 12px;
}
</style>
