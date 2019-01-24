export const tabs = [
  {
    label: "任务管理",
    name: "taskManage"
  },
  {
    label: "敏感词库",
    name: "sensitive"
  },
  {
    label: "类别管理",
    name: "typeManage"
  }
];

export const tableColumn = {
  taskManage: [
    {
      prop: "id",
      label: "任务ID"
    },
    {
      prop: "name",
      label: "任务名称"
    },
    {
      prop: "group_list_display",
      label: "监测范围"
    },
    {
      prop: "period_display",
      label: "监测频率"
    },
    {
      prop: "categories_list_display",
      label: "敏感词类别"
    },
    {
      prop: "is_trojanhorse",
      label: "是否挂马监测"
    },
    {
      prop: "is_darklink",
      label: "是否暗链测试"
    },
    {
      prop: "is_webdistort",
      label: "是否网页篡改测试"
    },
    {
      prop: "create_datetime",
      label: "创建时间"
    },
    {
      prop: "is_active",
      label: "是否激活",
      switch: true
    }
  ],
  sensitive: [
    {
      prop: "name",
      label: "敏感词"
    },
    {
      prop: "category_display",
      label: "类别"
    },
    {
      prop: "risk_level_display",
      label: "风险级别"
    }
  ],
  typeManage: [
    {
      prop: "name",
      label: "类别"
    }
  ],
  taskReport: [
    {
      prop: "id",
      label: "ID",
      width: "50px"
    },
    {
      prop: "name",
      label: "任务名称"
    },
    {
      prop: "group_list_display",
      label: "监测范围"
    },
    {
      prop: "period_display",
      label: "监测频率"
    },
    {
      prop: "max_risk_level_display",
      label: "最大危险等级"
    },
    {
      prop: "keywords_match",
      label: "敏感词"
    },
    {
      prop: "num_positive",
      label: "情感积极"
    },
    {
      prop: "num_negative",
      label: "情感消极"
    },
    {
      prop: "num_trojanhorse",
      label: "挂马监测"
    },
    {
      prop: "num_darklink",
      label: "暗链监测"
    },
    {
      prop: "num_webdistort",
      label: "网页篡改监测"
    },
    {
      prop: "create_datetime",
      label: "创建时间"
    }
  ],
  mainbodyReport: [
    {
      prop: "mainbody_name",
      label: "主体单位"
    },
    {
      prop: "person_liable",
      label: "负责人"
    },
    {
      prop: "assets_display",
      label: "资产名称列表"
    },
    {
      prop: "max_risk_level_display",
      label: "最大危险等级"
    },
    {
      prop: "num_keyword",
      label: "敏感词数量"
    },
    {
      prop: "num_positive",
      label: "情感积极"
    },
    {
      prop: "num_negative",
      label: "情感消极"
    },
    {
      prop: "categories_display",
      label: "敏感词类别列表"
    },
    {
      prop: "keywords_display",
      label: "敏感词列表"
    },
    {
      prop: "num_url",
      label: "文章数量"
    }
  ],
  assetsReport: [
    {
      prop: "asset_name",
      label: "资产"
    },
    {
      prop: "url",
      label: "链接",
      url: true
    },
    {
      prop: "mainbody_name",
      label: "主体单位"
    },
    {
      prop: "max_risk_level_display",
      label: "最大危险等级"
    },
    {
      prop: "asset_contact_name",
      label: "资产负责人"
    },
    {
      prop: "sentiment_point_display",
      label: "情感分数"
    },
    {
      prop: "num_keyword",
      label: "敏感词数量"
    },
    {
      prop: "categories_display",
      label: "敏感词类别列表"
    },
    {
      prop: "keywords_display",
      label: "敏感词列表"
    },
    {
      prop: "summary",
      label: "文章摘要"
    }
  ]
};
export const chart = {
  analysis: {
    legend: {
      data: ["计数"]
    },
    yAxis: [
      {
        type: "value",
        axisLine: { lineStyle: { color: "#1e96ef" } },
        name: "次数"
      }
    ]
  }
};
