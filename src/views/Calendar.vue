<template>
    <v-container fill-height>
        <v-layout align-center row wrap>
            <v-flex v-for="(num, i) in doors" v-bind:key="i" xs2>
                <Door
                    :active="openDoor === i"
                    :number="num"
                    :col="i % 6"
                    :row="Math.floor(i / 6)"
                    :clickHandler="open"
                />
            </v-flex>
        </v-layout>
        <v-btn dark fab small color="black" class="back" @click="toggleFullscreen">
            <v-icon v-if="!fullscreen">mdi-fullscreen</v-icon>
            <v-icon v-else>mdi-fullscreen-exit</v-icon>
        </v-btn>
        <v-snackbar v-model="snackbar" v-bind:timeout="1000" color="error">
            <span class="snackbar text-xs-center">Nu får du lugna dig lilla gubben!</span>
        </v-snackbar>
    </v-container>
</template>

<script>
import Door from '../components/Door';

export default {
    data() {
        return {
            fullscreen: false,
            doorOpen: false,
            doors: Array.from({ length: 24 }, (v, k) => k + 1)
                .map((a) => [Math.random(), a])
                .sort((a, b) => a[0] - b[0])
                .map((a) => a[1]),
            openDoor: undefined,
            snackbar: false
        };
    },
    components: {
        Door
    },
    methods: {
        toggleFullscreen: function() {
            var elem = document.documentElement;
            if (!this.fullscreen) {
                elem.requestFullscreen && elem.requestFullscreen();
                elem.mozRequestFullScreen && elem.mozRequestFullScreen();
                elem.webkitRequestFullscreen && elem.webkitRequestFullscreen();
                elem.msRequestFullscreen && elem.msRequestFullscreen();
            } else {
                document.exitFullscreen && document.exitFullscreen();
                document.mozCancelFullScreen && document.mozCancelFullScreen();
                document.webkitExitFullscreen && document.webkitExitFullscreen();
                document.msExitFullscreen && document.msExitFullscreen();
            }
            this.fullscreen = !this.fullscreen;
        },
        open: function(door) {
            var currentDate = new Date();
            var day = currentDate.getDate();
            var month = currentDate.getMonth() + 1;

            if (month !== 12 || day < this.doors[door]) {
                // eslint-disable-next-line
                console.log(month, day);
                this.snackbar = true;
            } else {
                this.openDoor = door === this.openDoor ? undefined : door;
            }
        }
    },
    created() {
        // eslint-disable-next-line
        console.log('route', this.$router.params.name);
    }
};
</script>

<style scoped>
.container {
    background-image: url('https://wallpapercave.com/wp/1zIVRdg.jpg');
    background-size: 100% 100%;
    max-width: none;
    padding: 48px;
}
.back {
    right: 5px;
    top: 5px;
    position: absolute;
}
.flex.xs2 {
    height: calc((100vh - 96px) / 4);
}
.snackbar {
    width: 100%;
    text-align: center;
}
</style>
