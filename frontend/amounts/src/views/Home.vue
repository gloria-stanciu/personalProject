<template>
<body>
<AuthHeader msg="AMOUNTS"></AuthHeader>
<div class="container">
<div class="box1">
  <div><Balance amount="120$"></Balance></div>
  <div><FastAdding></FastAdding></div>
  <div><UpcomingDebts title="Upcoming deadline debts" main="3 days left" amount="25$" name="Sarah Wilson" detail="Last night's drinks"></UpcomingDebts></div>
  <div><UpcomingGoals title="Close to fulfill this goals" main="Oulu citybreak" amount="3000$" detail="Trip in late august"></UpcomingGoals></div>
</div>
<div class="box2">
  <Transactions></Transactions>
</div>
<div class="box3">
  <ThisWeekNews title="This week"></ThisWeekNews>
  <PieChart title="Pie chart"></PieChart>
  <Graph title="Graph"></Graph>
</div>
</div>
</body>
</template>

<script>
import AuthHeader from "@/components/AuthHeader.vue"
import Balance from "@/components/Balance.vue"
import FastAdding from "@/components/FastAdding.vue"
import UpcomingDebts from "@/components/UpcomingDebts.vue"
import UpcomingGoals from "@/components/UpcomingGoals.vue"
import Transactions from "@/components/Transactions.vue"
import ThisWeekNews from "@/components/ThisWeekNews.vue"
import PieChart from "@/components/PieChart.vue"
import Graph from "@/components/Graph.vue"

  export default {
    name: 'Home',
    components: {
      AuthHeader,
      Balance,
      FastAdding,
      UpcomingDebts,
      UpcomingGoals,
      Transactions,
      ThisWeekNews,
      PieChart,
      Graph
    },
  }
</script>

<style scoped>

.box1{
  flex: 25%;
  margin: 10px 0px;
  height: 100%;
}
.box2{
  flex: 45%;
  height: 100%;
  margin: 10px 0px;
  margin-left:20px;
}
.box3{
  height: 100%;
  flex: 30%;
  margin: 10px 0px;
  margin-left:20px;
}
.container{
  display: flex;
  width: 100%;
  margin: 10px auto;
}
body{
  margin-top: 55px;
  padding-left:0px;
  padding-right: px;
  background:#f4f4f4;
  width: 100%;
}
</style>