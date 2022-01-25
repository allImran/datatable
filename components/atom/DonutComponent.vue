<template>
    <div class="container p-20 mx-auto bg-blue-200 h-screen overflow-y-auto">
        <p class="uppercase text-blue-500 text-5xl text-center mb-10">workspacify</p>
        <div class="grid gap-3 grid-cols-6 p-10 bg-white rounded-3xl">
            <div>

            </div>
            <div class="border-2 border-gray-200 col-span-3">
                <div>
                    <svg height="160" width="160" viewBox="0 0 160 160">
                    <g v-for="(value, index) in initialValues" :key="index">
                        <circle 
                            :cx="cx"
                            :cy="cy"
                            :r="radius"
                            fill="transparent"
                            :stroke="colors[index]" 
                            :stroke-width="strokeWidth"
                            :stroke-dasharray="circumference"
                            :stroke-dashoffset="calculateStrokeDashOffset(value, circumference)"
                            :transform="returnCircleTransformValue(index)"
                        ></circle>
                    <text></text>
                    </g>
                </svg>
                </div>
            </div>
            <div class="border-2 border-gray-200 col-span-2"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DonutComponent',
    props: {
        initialValues: {
            type: Array,
        }
    },
    data() {
        return {
            angleOffset: -90,
            chartData: [],
            colors: ["#6495ED", "goldenrod", "#cd5c5c", "thistle", "lightgray"],
            cx: 80,
            cy: 80,                      
            radius: 60,
            sortedValues: [],
            strokeWidth: 30,    
        }
    },
    computed: {
        circumference() {
            return 2 * Math.PI * this.radius
        },
        sortInitialValues() {
            return this.sortedValues = this.initialValues.sort((a,b) => b-a)
        },
        calculateChartData() {
            this.chartData = [];
            this.sortedValues.forEach((dataVal, index) => {
                const data = {
                    degrees: this.angleOffset,
                }
                this.chartData.push(data)
                this.angleOffset = this.dataPercentage(dataVal) * 360 + this.angleOffset
            })
        },
        dataTotal() {
            return this.sortedValues.reduce((acc, val) => acc + val)
        },
    },
    methods: {
       calculateStrokeDashOffset(dataVal, circumference) {
            const strokeDiff = this.dataPercentage(dataVal) * circumference
            return circumference - strokeDiff
        },    
        dataPercentage(dataVal) {
            return dataVal / this.dataTotal
        },
        returnCircleTransformValue(index) {
            return `rotate(${this.chartData[index].degrees}, ${this.cx}, ${this.cy})`
            
        },  
    },

    created() {
        this.sortInitialValues
        this.calculateChartData
    }
}
</script>
<style scoped>

svg {
  height: 200px;
  width: 200px;
}
text {
  fill: #333;
  font-family: "Roboto", sans-serif;
  font-size: .75rem;
}
</style>