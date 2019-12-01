<template>
    <div id="Setup">
        <v-form class="bform">
            <v-container>
                <v-text-field class="text-xs-center" v-model="name" label="Namn" required></v-text-field>
                <v-text-field
                    disabled
                    class="text-xl-center"
                    v-model="calendarOptions"
                    label="Luckinnehåll  *Disabled*"
                    required
                ></v-text-field>
                <v-btn color="success" class="mr-4" @click="saveAndContinueToCalendar">Gå vidare</v-btn>
            </v-container>
        </v-form>

        <pre v-if="name === 'bebo'">{{ $data || json }}</pre>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            calendarOptions: ''
        };
    },
    methods: {
        saveAndContinueToCalendar: function() {
            // eslint-disable-next-line
        console.log('route', this.name);
            this.$router.push({ name: 'Calendar', params: { name: this.name } });
        }
    },
    mounted() {
        if (this.name !== '') {
            this.$router.push('./Calendar');
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
