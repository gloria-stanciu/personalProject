<template>
<body>
<AuthHeader msg="AMOUNTS"></AuthHeader>
<div>
<div class="flex-column">
  <Balance amount="120$"></Balance>
  <FastAdding></FastAdding>
  <UpcomingDebts main="3 days left" amount="25$" name="Sarah Wilson" detail="Last night's drinks"></UpcomingDebts>
  <UpcomingGoals main="Oulu citybreak" amount="3000$" detail="Trip in late august"></UpcomingGoals>
</div>
<div class="flex-column">
  <Transactions></Transactions>
</div>
<div class="flex-column">
  <ThisWeekNews></ThisWeekNews>
  <PieChart></PieChart>
  <Graph></Graph>
</div>
</div>
</body>
<!-- <div>Hello</div> -->
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
body{
  margin-top: 60px;
  background:#f4f4f4;
  height: 100%;
  width: 100%;
}
</style>