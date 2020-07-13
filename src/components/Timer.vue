<template>
  <div class="timer-wrapper">
    <div class="new-timer-form">
      <input type="text" class="timer-name-field" v-model="newTimerName" @keyup.enter="createNewTimer">
      <button @click="createNewTimer">add</button>
    </div>
    <table class="timers">
      <tr v-for="timer in timers" class="timer">
        <td>{{ timer.name }}</td>
        <td>{{ timer.getTimeString() }}</td>
        <td><i @click="timer.startTimer()">start</i></td>
        <td><i @click="timer.stopTimer()">stop</i></td>
        <td><i @click="deleteTimer(timer)">delete</i></td>
      </tr>
    </table>
  </div>
</template>

<script>
import Timer from '../js/timers.js'

export default {
    name: 'timer',

    data: function () {
      return {
        timers: [],
        newTimerName: '',
      }
    },

    methods: {
      createNewTimer() {
        this.timers.push(new Timer(this.newTimerName));
        this.newTimerName = '';
      },

      createrTimerFromJSON(timerJSON) {
        return Timer.createFromJSON(timerJSON);
      },

      deleteTimer(timer) {
        let idx = this.timers.indexOf(timer);
        this.timers.splice(idx, 1);
        timer = null;
      },

      putTimersToStorage() {
        localStorage.setItem(
          "timers", 
          JSON.stringify(this.timers)
        );
      },

      loadTimersFromStorage() {
        let timersJSON = JSON.parse(
          localStorage.getItem("timers") || "[]"
        );
        
        this.timers = timersJSON.map(
          timer => Timer.createFromJSON(timer)
        );
        this.timers.forEach(timer => timer.runTimer())
      }
    },

    created() {
      let context = this;
      window.addEventListener(
        "beforeunload", function() {
          context.putTimersToStorage().bind(context);
        });
    },

    mounted() {
      this.loadTimersFromStorage();
    }
}
</script>

<style lang="scss">
.timer-wrapper {
    width: 50%;
    min-height: 50vh;
    background-color: #fff;
    border-radius: 12px;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
}
</style>