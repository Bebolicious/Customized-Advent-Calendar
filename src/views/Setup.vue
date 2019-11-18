<template>
  <div id="Setup">
    <v-form class="bform">
      <v-container>
        <v-text-field class="text-xs-center" v-model="name" label="Namn" required></v-text-field>
        <v-btn color="success" class="mr-4" @click="toCalendar">Gå vidare</v-btn>
      </v-container>
    </v-form>

    <pre>{{ $data || json }}</pre>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: true,
      name: ""
    };
  },
  methods: {
    toCalendar: function() {
      this.$router.push("./Calendar");
    }
  },
  mounted() {
    if (this.name !== "") {
      this.$router.push("./Calendar");
    }
  }
};
</script>
<style>
#Setup {
  background-color: #999999;
  text-align: -webkit-center;
}
.bform {
  width: 20%;
}
</style>
