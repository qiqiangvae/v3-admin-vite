import { request } from "@/utils/service"

/** 模拟接口 */
export function getEchartsDashboardApi() {
  return request<ChartsDashboardResponseData>({
    url: "/charts/dashboard",
    method: "get"
  })
}

export interface Tooltip {
  show?: any
  triggerOn?: any
  alwaysShowContent?: any
  formatter?: any
  position?: any
  confine?: any
  align?: any
  verticalAlign?: any
  showDelay?: any
  hideDelay?: any
  transitionDuration?: any
  enterable?: any
  backgroundColor?: any
  borderColor?: any
  borderRadius?: any
  borderWidth?: any
  shadowBlur?: any
  shadowColor?: any
  shadowOffsetX?: any
  shadowOffsetY?: any
  padding?: any
  extraCssText?: any
  textStyle?: any
  mainType?: any
  type?: any
  id?: any
  name?: any
  z?: any
  zlevel?: any
  axisPointer?: any
  showContent?: any
  trigger: string
  displayMode?: any
  renderMode?: any
  appendToBody?: any
  className?: any
  order?: any
}

export interface Legend {
  mainType?: any
  type?: any
  id?: any
  name?: any
  z?: any
  zlevel?: any
  icon?: any
  inactiveColor?: any
  inactiveBorderColor?: any
  inactiveBorderWidth?: any
  formatter?: any
  itemStyle?: any
  lineStyle?: any
  textStyle?: any
  symbolRotate?: any
  symbolKeepAspect?: any
  width?: any
  height?: any
  top?: any
  right?: any
  bottom?: any
  left?: any
  borderColor?: any
  borderWidth?: any
  borderType?: any
  borderCap?: any
  borderJoin?: any
  borderDashOffset?: any
  borderMiterLimit?: any
  show?: any
  orient?: any
  align?: any
  backgroundColor?: any
  borderRadius?: any
  padding?: any
  itemGap?: any
  itemWidth?: any
  itemHeight?: any
  selectedMode?: any
  selected?: any
  selector?: any
  selectorLabel?: any
  emphasis?: any
  selectorPosition?: any
  selectorItemGap?: any
  selectorButtonGap?: any
  data?: any
  tooltip?: any
}

export interface Sery {
  mainType?: any
  type: string
  id?: any
  name: string
  z?: any
  zlevel?: any
  animation?: any
  animationThreshold?: any
  animationDuration?: any
  animationEasing?: any
  animationDelay?: any
  animationDurationUpdate?: any
  animationEasingUpdate?: any
  animationDelayUpdate?: any
  color?: any
  colorLayer?: any
  emphasis?: any
  select?: any
  blur?: any
  markArea?: any
  markLine?: any
  markPoint?: any
  tooltip?: any
  silent?: any
  blendMode?: any
  cursor?: any
  dataGroupId?: any
  data: number[]
  colorBy?: any
  legendHoverLink?: any
  progressive?: any
  progressiveThreshold?: any
  progressiveChunkMode?: any
  coordinateSystem?: any
  hoverLayerThreshold?: any
  seriesLayoutBy?: any
  labelLine?: any
  labelLayout?: any
  stateAnimation?: any
  universalTransition?: any
  selectedMap?: any
  selectedMode?: any
  polarIndex?: any
  polarId?: any
  barMinHeight?: any
  barMinAngle?: any
  barMaxWidth?: any
  barMinWidth?: any
  barWidth?: any
  barGap?: any
  barCategoryGap?: any
  large?: any
  largeThreshold?: any
  itemStyle?: any
  label?: any
  stack?: any
  sampling?: any
  datasetIndex?: any
  datasetId?: any
  sourceHeader?: any
  dimensions?: any
  encode?: any
  clip?: any
  roundCap?: any
  showBackground?: any
  backgroundStyle?: any
  realtimeSort?: any
  xaxisIndex?: any
  yaxisIndex?: any
  xaxisId?: any
  yaxisId?: any
}

export interface Xaxi {
  gridIndex?: any
  gridId?: any
  position?: any
  offset?: any
  categorySortInfo?: any
  mainType?: any
  type: string
  id?: any
  name?: any
  z?: any
  zlevel?: any
  animation?: any
  animationThreshold?: any
  animationDuration?: any
  animationEasing?: any
  animationDelay?: any
  animationDurationUpdate?: any
  animationEasingUpdate?: any
  animationDelayUpdate?: any
  show?: any
  inverse?: any
  nameLocation?: any
  nameRotate?: any
  nameTruncate?: any
  nameTextStyle?: any
  nameGap?: any
  silent?: any
  triggerEvent?: any
  tooltip?: any
  axisLabel?: any
  axisPointer?: any
  axisLine?: any
  axisTick?: any
  minorTick?: any
  splitLine?: any
  minorSplitLine?: any
  splitArea?: any
  min?: any
  max?: any
  data: string[]
  boundaryGap?: any
  deduplication?: any
}

export interface Yaxi {
  gridIndex?: any
  gridId?: any
  position?: any
  offset?: any
  categorySortInfo?: any
  mainType?: any
  type: string
  id?: any
  name?: any
  z?: any
  zlevel?: any
  animation?: any
  animationThreshold?: any
  animationDuration?: any
  animationEasing?: any
  animationDelay?: any
  animationDurationUpdate?: any
  animationEasingUpdate?: any
  animationDelayUpdate?: any
  show?: any
  inverse?: any
  nameLocation?: any
  nameRotate?: any
  nameTruncate?: any
  nameTextStyle?: any
  nameGap?: any
  silent?: any
  triggerEvent?: any
  tooltip?: any
  axisLabel?: any
  axisPointer?: any
  axisLine?: any
  axisTick?: any
  minorTick?: any
  splitLine?: any
  minorSplitLine?: any
  splitArea?: any
  min?: any
  max?: any
  data?: any
  boundaryGap?: any
  splitNumber?: any
  interval?: any
  minInterval?: any
  maxInterval?: any
  scale?: any
}

export interface EchartsOptions {
  animation?: any
  animationThreshold?: any
  animationDuration?: any
  animationEasing?: any
  animationDelay?: any
  animationDurationUpdate?: any
  animationEasingUpdate?: any
  animationDelayUpdate?: any
  color?: any
  colorLayer?: any
  baseOption?: any
  options?: any
  media?: any
  timeline?: any
  backgroundColor?: any
  darkMode?: any
  textStyle?: any
  useUTC?: any
  stateAnimation?: any
  dataset?: any
  aria?: any
  title?: any
  grid?: any
  radar?: any
  polar?: any
  geo?: any
  angleAxis?: any
  radiusAxis?: any
  singleAxis?: any
  parallel?: any
  parallelAxis?: any
  calendar?: any
  toolbox?: any
  tooltip: Tooltip
  axisPointer?: any
  brush?: any
  legend: Legend
  dataZoom?: any
  visualMap?: any
  graphic?: any
  series: Sery[]
  xaxis: Xaxi[]
  yaxis: Yaxi[]
}

export type ChartsDashboardResponseData = ApiResponseData<EchartsOptions[]>
