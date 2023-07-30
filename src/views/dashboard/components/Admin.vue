<template>
  <div>
    <el-row v-for="(group, g_idx) in optionGroup" :key="g_idx">
      <el-col :span="8" v-for="(item, idx) in group" :key="idx">
        <el-card class="box-card">
          <v-chart :option="item" class="chart-grid" />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { type EchartsOptions, getEchartsDashboardApi } from "@/api/hook-demo/charts-dashboard"
import { ref } from "vue"

const optionGroup = ref<EchartsOptions[][]>([])

const createCode = () => {
  getEchartsDashboardApi().then((res) => {
    const len = res.data.length //len为数组的长度
    const n = 3 // 假设每行显示4个
    const Num = len % n === 0 ? len / n : Math.floor(len / n + 1) //得出多少份
    for (let i = 0; i < Num; i++) {
      // slice() 方法返回一个从开始到结束（不包括结束）的数组。且原始数组不会被修改。
      const newArr = res.data.slice(i * n, i * n + n) //得到每份的数据
      optionGroup.value.push(newArr) //往res数组里加数据
    }
  })
}

export interface EchartsOptionsGroup {
  groupNum: number
  list: EchartsOptions[]
}

/** 初始化验证码 */
createCode()
</script>

<style lang="scss" scoped>
.center {
  height: 100%;
}

.box-card {
  width: 100%;
  height: 480px;
}

.chart-grid {
  height: 425px;
  width: 100%;
}
</style>
