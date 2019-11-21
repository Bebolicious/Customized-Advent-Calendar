<template>
    <div id="Setup">
        <v-form class="bform">
            <v-container>
                <v-text-field class="text-xs-center" v-model="name" label="Namn" required></v-text-field>
                <v-text-field
                    class="text-xl-center"
                    v-model="calendarOptions"
                    label="Luckinnehåll"
                    required
                ></v-text-field>
                <v-btn color="success" class="mr-4" @click="saveAndContinueToCalendar">Gå vidare</v-btn>
            </v-container>
        </v-form>

        <pre>{{ $data || json }}</pre>
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
            var fs = require('fs');
            let calenderFormat = this.calendarOptions.split('#');
            var json = JSON.stringify(calenderFormat);
            fs.writeFile('myjsonfile.json', json, 'utf8', function(err, result) {
                if (err) {
                    // eslint-disable-next-line
                    console.log('error', err);
                } else {
                    // eslint-disable-next-line
                    console.log(result);
                }
            });
            this.$router.push('./Calendar');
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
