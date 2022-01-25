<template>
    <div class="relative">
        <svg  height="160" width="160" viewBox="0 0 160 160">
            <g v-for="(item, index) in items" :key="index">
                <circle 
                    :cx="cx"
                    :cy="cy"
                    :r="radius"
                    fill="transparent"
                    :stroke="colors[index]" 
                    :stroke-width="strokeWidth"
                    :stroke-dasharray="circumference"
                    :stroke-dashoffset="calculateStrokeDashOffset(item, circumference)"
                    :transform="returnCircleTransformValue(index)"
                ></circle>
            <text></text>
            </g>
        </svg>
        <p class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">{{ dataTotal }}</p>
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
            render: false,
            angleOffset: -90,
            chartData: [],
            colors: ["#78c1ff", "#5099f4", "#2871cc", "#003f9a", "#468fea", "#78c1ff", "#5099f4", "#2871cc", "#003f9a", "#468fea" ],
            cx: 80,
            cy: 80,                      
            radius: 60,
            sortedValues: [],
            strokeWidth: 20,    
        }
    },
    computed: {
        items() {
            let itemArr = this.initialValues.map(i => i.value);
            return itemArr.sort((a,b) => b-a)
        },
        circumference() {
            return 2 * Math.PI * this.radius
        },
        
        dataTotal() {
            return this.items.reduce((acc, val) => acc + val)
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
        calculateChartData() {
            this.chartData = [];
            this.items.forEach((dataVal) => {
                const data = {
                    degrees: this.angleOffset,
                }
                this.chartData.push(data)
                this.angleOffset = this.dataPercentage(dataVal) * 360 + this.angleOffset
            })
        },
    },

    created() {
        this.calculateChartData()
    }
}
</script>
<style scoped>

svg {
  height: 250px;
  width: 250px;
}
text {
  fill: #333;
  font-family: "Roboto", sans-serif;
  font-size: .75rem;
}
</style>