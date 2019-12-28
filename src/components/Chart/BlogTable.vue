<template>
  <div class="contain">
    <el-table :data="tableData.items" stripe style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="createtime" label="创建时间"></el-table-column>
      <el-table-column prop="status" label="状态">
        <template slot-scope="{ row }">
          <el-tag :type="row.status | statusFilter">{{ row.status | formatStata }}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 5, 10, 20]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  created() {
    this.getTableData()
  },
  methods: {
    handleSizeChange(val) {
      this.queryInfo.pagesize = val
      this.getTableData()
    },
    handleCurrentChange(val) {
      this.queryInfo.pagenum = val
      this.getTableData()
    },
    getTableData() {
      this.tableData = {
        total: 11,
        pagenum: 1,
        items: [
          {title: '今天做实训练习',type: 'text',author: 'jwj16439',createtime: '2019-12-28 12:52:06',status: 1},
          {title: '今天做实训练习',type: 'text',author: 'jwj16439',createtime: '2019-12-28 12:52:06',status: 2},
          {title: '今天做实训练习',type: 'text',author: 'jwj16439',createtime: '2019-12-28 12:52:06',status: 3},
          {title: '今天做实训练习',type: 'text',author: 'jwj16439',createtime: '2019-12-28 12:52:06',status: 4},
          {title: '今天做实训练习',type: 'text',author: 'jwj16439',createtime: '2019-12-28 12:52:06',status: 5},
        ]
      }
      this.queryInfo.pagesize = 5
      this.queryInfo.pagenum = 1
      this.total = 11
    }
  },
  filters: {
    // el-tag类型转换
    statusFilter(status) {
      const statusMap = {
        2: 'info',
        4: 'danger',
        5: 'success'
      }
      return statusMap[status]
    },
    // 状态显示转换
    formatStata(status) {
      const statusMap = {
        1: '尚未发布',
        2: '等待审核',
        3: '审核通过',
        4: '审核失败',
        5: '发布成功',
        6: '发布失败'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      tableData: {},
      queryInfo: {
        pagesize: 1,
        pagenum: 1
      },
      total: 0
    }
  }
}
</script>
<style scoped>
.el-table {
  padding: 20px;
  
}
.contain{
  background-color: #fff;
  padding: 20px;
}
</style>
