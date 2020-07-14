<template>
  <div class="timer-wrapper">
    <div class="new-timer-form">
      <div class="inputs">
        <input 
          type="text" 
          class="timer-name-field" 
          v-model="newTimerName" 
          @keyup.enter="createNewTimer"
          placeholder="Timer Name">
        <button
          class="timer-add-button button-accent" 
          @click="createNewTimer">
            Create Timer
        </button>
      </div>
    </div>
    <table class="timers">
      <col width="38%"><col width="28%">
      <col width=17%><col width=17%>
      <tbody>
        <tr v-for="timer in timers" class="timer">
          <td class="name-cell">{{ timer.name }}</td>
          <td>
            <input
             type="text"
             class="time-display-input"
             :class="{ 'time-display-stopped': timer.isStopped() }"
             v-model="timer.getTimeString()"
             readonly>
          </td>
          <td class="icon-cell">
            <img 
              v-if="timer.isStopped()" 
              class="timer-run-icon play-icon" 
              src="../assets/icons/play.png" 
              @click="timer.startTimer()"/>
            <img 
              v-else 
              class="timer-run-icon pause-icon" 
              src="../assets/icons/pause.png" 
              @click="timer.stopTimer()"/>
          </td>
          <td class="icon-cell">
            <img 
              class="delete-icon"
              src="../assets/icons/delete.png"
              @click="deleteTimer(timer)"/>
          </td>
        </tr>
      </tbody>
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
$timers-margin-large: 20%;
$timers-margin-laptop: 10%;
$new-timer-input-width: 65%;
$new-timer-button-width: 30%;
$time-wrapper-width-large: 56%;
$time-wrapper-width-laptop: 70%;
$time-wrapper-width-tablet: 86%;

.timer-wrapper {
    width: 56%;
    min-height: 50vh;
    background-color: #fff;
    border-radius: 12px;
    margin: auto;
    display: flex;
    flex-flow: column nowrap;
    box-shadow: 0px 1px 3px rgba(32, 33, 39, 0.12);
    padding-bottom: 40px;
    margin: 60px auto 120px auto;
}

.timers {
  margin: 0 $timers-margin-large 0 $timers-margin-large;
  text-align: left;
  border-spacing: 0px 40px;
}

.new-timer-form {
  border-bottom: 1px solid #E7E8EA;

  .inputs {
    margin: 0px $timers-margin-large 0px $timers-margin-large;
    display: flex;
    flex-flow: row;
     flex-flow: row;
    justify-content: center;
    align-items: center;
    padding: 40px 0 40px 0;
  }
}

.timer-name-field {
  width: $new-timer-input-width;
  margin-left: 0;
}

.timer-add-button {
  width: $new-timer-button-width;
  padding: 4px;
  font-size: 17px;
  line-height: 24px;
}

.name-cell {
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  color: #5586F2;
}

.time-display-input {
  text-align: center;
  padding: 24px 14px 24px 14px;
  width: 120px;
  background-color: #e7e8ea;
}

.time-display-stopped {
  background: rgba(255, 72, 118, 0.15);
}

.icon-cell {
  text-align: center;
}

.timer-run-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  padding: 15px;
}

.timer-run-icon:hover {
  cursor: pointer;
}

.play-icon {
  background: linear-gradient(135deg, #009FC5 0%, #3CECB0 100%);
}

.pause-icon {
  background: linear-gradient(135deg, #7956EC 0%, #2FB9F8 100%);
}

.delete-icon {
  width: 20px;
  height: 20px;
  padding: 15px;
  background: linear-gradient(135deg, #F23673 0%, #FCA069 100%);
  border-radius: 6px;
}

.delete-icon:hover {
  cursor: pointer;
}


@media screen and (max-width: 1200px) {
  .timer-wrapper {
    width: $time-wrapper-width-laptop;
  }

  .timers {
    margin: 0 $timers-margin-laptop 0 $timers-margin-laptop; 
  }

  .new-timer-form {
    .inputs {
      margin: 0px $timers-margin-laptop 0px $timers-margin-laptop;
    }
  }
}

@media screen and (max-width: 768px) {
  .timer-wrapper {
    width: $time-wrapper-width-tablet;
  }

}

</style>