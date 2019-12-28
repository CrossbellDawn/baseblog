<template>

  <div class="dashboard-editor-container">
     <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/chart' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>当前位置</el-breadcrumb-item>
      </el-breadcrumb>
    <panel-group />

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
      <line-chart :chart-data="lineChartData"></line-chart>
    </el-row>

    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="16">
        <div class="chart-wrapper">
          <bar-chart></bar-chart>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <pie-chart />
        </div>
      </el-col>
    </el-row>

    <el-row>
      <blog-table></blog-table>
    </el-row>
  </div>
</template>

<script>
import PanelGroup from '@/components/Chart/PanelGroup.vue'
import LineChart from '@/components/Chart/LineChart.vue'
import BarChart from '@/components/Chart/BarChart.vue'
import PieChart from '@/components/Chart/PieChart.vue'
import BlogTable from '@/components/Chart/BlogTable.vue'

const lineChartData = {
  newVisitis: {
    expectedData: [30,140,30,140,30,140,30,140,30,140,30,140,30,140],
    actualData: [140,60,140,60,140,60,140,60,140,60,140,60,140,60,]
  }
}

export default {
  name: 'DashboardAdmin',
  components: {
    PanelGroup,
    LineChart,
    BarChart,
    PieChart,
    BlogTable
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
