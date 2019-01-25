<template>
  <div
    class="card"
    :style="cardStyle"
  >
    <slot>
      <div class="large-area">
        <p class="title">{{defaultCardContent.large.title}}</p>
        <p class="point">
          <count-to
            :startVal="0"
            :endVal="defaultCardContent.large.num"
          ></count-to>
        </p>
      </div>
      <div class="small-area">
        <div
          v-for="(part,index) in defaultCardContent.small"
          :key="index"
          class="small-area-part"
          :style="{width:100/defaultCardContent.small.length+'%'}"
        >
          <p class="title">{{part.title}}</p>
          <p class="point">
            <count-to
              :startVal="0"
              :endVal="part.num"
            ></count-to>
          </p>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo
  },
  props: {
    cardStyle: {
      type: Object,
      default: function() {
        return {
          width: "260px",
          height: "200px"
        };
      }
    },
    defaultCardContent: {
      type: Object,
      default: function() {
        return {
          large: {
            title: "测定值",
            num: 189
          },
          small: [
            {
              title: "具体值",
              num: 123
            },
            {
              title: "粗略值",
              num: 189
            }
          ]
        };
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "assets/style/global.scss";
.card {
  box-shadow: $shadow;
  text-align: center;
  display: inline-block;
  position: relative;
  p {
    margin: 0;
  }
  .large-area {
    padding: 20px;
    height: 120px;
    .title {
      font-size: 24px;
      color: $fontColor;
    }
    .point {
      color: rgb(65, 164, 244);
      font-size: 42px;
    }
  }
  .small-area {
      border-top: 1px solid #99999952;
      position: absolute;
      top: 120px;
      bottom: 0;
      width: 100%;
      .small-area-part {
          display: inline-block;
          height: 100%;
          padding: 10px;
          border-right: 1px solid #99999952;
          &:last-child {
              border-right: none;
          }
      }
  }
}
</style>
