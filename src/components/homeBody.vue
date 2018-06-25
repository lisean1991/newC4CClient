<template>
  <div class="homebody" >
    <div class="homebodybox" :style="{width:size.x+'rem',height:size.y+'rem'}">
      <div id="top" class="homeCard cardstyleTop" :style="styleTop" v-on:click="onPress(homeData.top.key)">
        <span class="homeManueText">{{homeData.top.description}}</span>
      </div>
      <div id="bottom" class="homeCard cardstyleBottom" :style="styleBottom" v-on:click="onPress(homeData.bottom.key)">
        <span class="homeManueText">{{homeData.bottom.description}}</span>
      </div>
      <div id="left" class="homeCard cardstyleLeft" :style="styleLeft" v-on:click="onPress(homeData.left.key)">
        <span class="homeManueText">{{homeData.left.description}}</span>
      </div>
      <div id="right" class="homeCard cardstyleRight" :style="styleRight" v-on:click="onPress(homeData.right.key)">
        <span class="homeManueText">{{homeData.right.description}}</span>
      </div>
      <div id="pre" class="homeCard cardstylePre" :style="stylePre" v-on:click="onPress(homeData.pre.key)">
        <span class="homeManueText">{{homeData.pre.description}}</span>
      </div>
      <div id="back" class="homeCard cardstyleBack" :style="styleBack" v-on:click="onPress(homeData.back.key)">
        <span class="homeManueText">{{homeData.back.description}}</span>
      </div>
    </div>
  </div>
</template>

<!-- <script type="text/javascript" src="static/resource/jquery-touchrotate.js"></script> -->
<script >
  import 'static/resource/jquery-touchrotate.js';
  export default {
    props:["homeData"],
    data:function(){
      return {
        size:{
          x:25,
          y:25,
          z:25
        },
        styleLeft:{
          transform: '',
          width:'',
          height:''
        },
        styleRight:{
          transform: ``,
          width:'',
          height:''
        },
        styleTop:{
          transform: ``,
          width:'',
          height:''
        },
        styleBottom:{
          transform: ``,
          width:'',
          height:''

        },
        stylePre:{
          transform: ``,
          width:'',
          height:''
        },
        styleBack:{
          transform: ``,
          width:'',
          height:''

        }

      }
    },
    computed:{
      preZ(){
        return this.size.y/2 + 'rem'
      },
      backZ(){
        return this.size.y/2 + 'rem'
      },
      leftZ(){
        return this.size.y/2 + 'rem'
      },
      rightZ(){
        return this.size.x - this.size.y/2 + 'rem'
      },
      topZ(){
        return this.size.y/2 + 'rem'
      },
      bottomZ(){
        return this.size.z - this.size.y/2 + 'rem'
      },
    },
    mounted() {
      	$(".homebodybox").touchrotate({
      		//初始3D旋转
      		rotateX: -15,
      		rotateY: 15,
      		//数值越小 , 旋转速度越快
      		speedX: 2,
      		speedY: 2,
      		// 旋转的倍数, 越大旋转的圈数越多
      		multipleX: 50,
      		multipleY: 50,
      		// 动画持续的时间, 单位是S
      		time: 2,
      		//模式 0:表示匀速运动 , 运动中途可以重新开始 , 1表示先加速后减速(动画过程中不可滑动,体验效果差)
      		model: 0
      	});

    },
    created(){
      this.creat()
    },
    watch:{
      size:{
        handler(){
          this.creat()
        },
        deep:true
      }
    },
    methods:{
      creat(){
        this.styleLeft.width = this.styleRight.width = this.size.y + 'rem';
        this.styleLeft.height = this.styleRight.height = this.size.z + 'rem';
        this.styleTop.width = this.styleBottom.width = this.size.x + 'rem';
        this.styleTop.height = this.styleBottom.height = this.size.y + 'rem';
        this.stylePre.width = this.styleBack.width = this.size.x + 'rem';
        this.stylePre.height = this.styleBack.height = this.size.z + 'rem';

        this.styleLeft.transform = `rotateY(-90deg) translateZ(${this.leftZ})`;
        this.styleRight.transform = `rotateY(90deg) translateZ(${this.rightZ})`;
        this.styleTop.transform = `rotateX(90deg) translateZ(${this.topZ})`;
        this.styleBottom.transform = `rotateX(-90deg) translateZ(${this.bottomZ})`;
        this.stylePre.transform = `translateZ(${this.preZ})`;
        this.styleBack.transform = `rotateY(180deg) translateZ(${this.backZ})`;
      },
      onPress(navName){
        this.$router.push({
            name: navName
          });
      }
    }

  }
</script>
