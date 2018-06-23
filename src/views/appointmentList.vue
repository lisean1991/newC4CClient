<template>
  <div id="content">
    <h3 class="listHeader">My Appointments</h3>
    <hr></hr>
    <div>
      <ul>
        <li v-for="(item,index) in items" class="listItem" @click="onPress(item.id)">
          <div>
            <span>{{index}}</span>
            <span>{{item.id}}</span>
            <span>{{item.title}}</span>
            <time>{{item.time}}</time>
            <span>{{item.user}}</span>
            <span>{{item.address}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data:function(){
      return {
        items:[
          {
            id:"10001",
            title:"My Appointment1",
            time:"2018.06.21",
            address:"天府五街1号",
            user: "王大炮"
          },
          {
            id:"10002",
            title:"My Appointment2",
            time:"2018.06.21",
            address:"天府五街5号",
            user: "王大炮"
          },
          {
            id:"10003",
            title:"My Appointment3",
            time:"2018.06.21",
            address:"天府五街4号",
            user: "王大炮"
          },
          {
            id:"10004",
            title:"My Appointment4",
            time:"2018.06.21",
            address:"天府五街3号",
            user: "王大炮"
          },
          {
            id:"10005",
            title:"My Appointment5",
            time:"2018.06.21",
            address:"天府五街2号",
            user: "王大炮"
          }
        ]
      }
    } ,
    methods:{
      onPress: function(id){
        this.$router.push({ name: 'appointmentDetail', params: { id: id }})
      },
    }
  }
</script>
