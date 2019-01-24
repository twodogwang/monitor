<template>
  <div class="table-container">
    <el-table
      :show-overflow-tooltip="true"
      :data="tableData"
      @selection-change="changeSelection"
      v-loading="loading"
      element-loading-text="加载中..."
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
    >
      <el-table-column
        type="index"
        width="50"
        label="序号"
        v-if="special.index"
      ></el-table-column>
      <el-table-column
        v-if="special.select"
        type="selection"
        width="50"
      ></el-table-column>
      <el-table-column
        v-for="(column,index) in columnList"
        :label="column.label"
        :prop="column.prop"
        :key="index"
        :width="column.width"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <el-tooltip
            v-if="column.switch"
            class="item"
            effect="dark"
            :content="scope.row.is_active?'当前状态：激活':'当前状态：未激活'"
            placement="top"
          >
            <el-switch
              v-model="scope.row.is_active"
              active-color="#1E96EF"
              inactive-color="#666"
              :active-value="true"
              :inactive-value="false"
              @change="changeActive($event,scope.row.id)"
            >
            </el-switch>
          </el-tooltip>
          <a
            v-else-if="column.url"
            target="_blank"
            :href="scope.row[column.prop]"
          >{{scope.row[column.prop]}}</a>
          <template v-else-if="Array.isArray(scope.row[column.prop])">
            {{scope.row[column.prop].length>0?scope.row[column.prop].join(' , '):'-'}}
          </template>
          <template v-else>
            {{!scope.row[column.prop]?' - ':scope.row[column.prop]}}
          </template>
        </template>
      </el-table-column>
      <el-table-column
        label="操作"
        v-if="handlers.length>0"
        :min-width="handlers.length*50"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            v-for="(handler,index) in handlers"
            :key="index"
            @click="handle(scope.$index, scope.row , handler.Eng)"
          >{{handler.Chi}}</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        :total="pageInfo.total"
        :page-size="pageInfo.page_size"
        :current-page.sync="pageInfo.page"
        :page-sizes="[10, 20, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { tableColumn } from "utils/data/config.js";
import { mapState } from "vuex";
export default {
  data() {
    return {
      columnList: tableColumn[this.tableType]
    };
  },
  computed: {
    ...mapState({
      tableData: function(state) {
        return state.safeMonitor[this.tableType].data;
      } /* state =>{
        return state.safeMonitor[this.tableType];
        // console.log(this)
      } */,
      pageInfo: function(state) {
        return state.safeMonitor[this.tableType].pageInfo;
      },
      loading: function(state) {
        return state.safeMonitor[this.tableType].loading;
      }
    })
  },
  methods: {
    changeSelection(selection) {
      this.$emit("changeSelection", { selection, type: this.tableType });
    },
    handleCurrentChange(page) {
      // this.$emit("handleCurrentChange", { page, type: this.tableType });
      this.$store.dispatch("safeMonitor/changePageInfo", {
        type: this.tableType,
        pageNum: page
      });
    },
    handleSizeChange(size) {
      this.$store.dispatch("safeMonitor/changePageInfo", {
        type: this.tableType,
        pageSize: size
      });
    },
    handle(index, row, type) {
      this.$emit(`handle${type}`, { index, row });
    },
    changeActive(e, id) {
      this.$emit("changeActive", { isActive: e, id });
    }
  },
  created() {
    console.dir(this)
    setTimeout(() => {
      if (this.refresh) {
        this.$store.dispatch("safeMonitor/clearInfo", {
          type: this.tableType,
          id: [this.$route.params.taskReportId, this.$route.params.mainbodyId]
        });
      } else {
        this.$store
          .dispatch("safeMonitor/getList", this.tableType)
          .then(null, reject => {
            this.$message({
              message: "请求失败",
              type: "error"
            });
          });
      }
    }, 0);
  },
  beforeDestroy() {
    // console.log(this.$route, "beforeDestroy");
    /* this.$store.dispatch("safeMonitor/changeSearchParams", {
      type: this.tableType,
      search: null,
      isDestroy: true
    }); */
  },
  props: {
    /* pageInfo: {
      type: Object,
      default: function() {
        return { pageSize: 10, total: 10 };
      }
    },
    columnList: {
      type: Array,
      default: function() {
        return [];
      }
    },
    columnData: {
      type: Array,
      default: function() {
        return [];
      }
    },*/
    handlers: {
      type: Array,
      default: function() {
        return [
          {
            Chi: "编辑",
            Eng: "Edit"
          },
          {
            Chi: "删除",
            Eng: "Delete"
          }
        ];
      }
    },
    tableType: {
      type: String,
      default: ""
    },
    special: {
      type: Object,
      default: function() {
        return {
          index: false,
          select: true
        };
      }
    } /*,
    loading: {
      type: Boolean,
      default: false
    } */,
    refresh: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang='scss'>
.table-container {
  margin-top: 10px;
}
</style>
