<template>
<body>
<AuthHeader msg="AMOUNTS"></AuthHeader>
<Balance></Balance>
<Transactions main="Sold phone" amount="2000$" date="On"></Transactions>
<ThisWeekNews title = "News"></ThisWeekNews>
</body>
</template>

<script>
// @ is an alias to /src
import AuthHeader from "@/components/AuthHeader.vue";
import Balance from "@/components/Balance.vue"
import FastAdding from "@/components/FastAdding.vue";
import UpcomingDebts from "@/components/UpcomingDebts.vue";
import UpcomingGoals from "@/components/UpcomingGoals.vue";
import Transactions from "@/components/Transactions.vue";
import ThisWeekNews from "@/components/ThisWeekNews.vue";
import PieChart from "@/components/PieChart.vue";
import Graph from "@/components/Graph.vue";

export default {
  name: "Home",
  components: {
    Balance,
    AuthHeader,
    // FastAdding,
    // UpcomingDebts,
    // UpcomingGoals,
    // Transactions,
    // ThisWeekNews,
    // PieChart,
    // Graph
  },
};
</script>

<style scoped lang="scss">
body{
  margin-top: 50px;
  margin-bottom: 150px;
  position: fixed; 
  top: 0; 
  left: 0; 
  min-width: 100%;
  min-height: 100%; 
  background: #F4F4F4;
}
</style>