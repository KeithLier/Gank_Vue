<template>
  <div>
    <div class="content_list">
      <el-row v-for="(item, index) in results" :key="index">
        <el-card :body-style="{ padding: '0px' }" >
          <div class="content_card">
            <img :src="item.images[0]" v-if="item.images.length > 0" class="image">
            <div class="content_view" style="padding: 14px;">
              <div class="content_title">{{item.title}}</div>
              <div class="content_desc">{{item.desc}}</div>
            </div>
          </div>
        </el-card>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "ContentList",
  data () {
    return {
      results: []
    };
  },

  mounted () {
    this.getContentList();
  },

  methods: {
    getContentList () {
      let category = this.$route.query.category;
      let type = this.$route.query.type;
      axios.get('https://gank.io/api/v2/data/category/' + category + "/type/" + type + "/page/1/count/20")
        .then(response => {
          let results = response.data.data;
          this.results = results
        })
        .catch(error => {

        })

    }
  }
  
}
</script>

<style scoped>

.content_card {
  position: relative;
  display: flex;
  justify-content: space-between;
}
.content_view {
  position: relative;
  float: left;
  padding-left: 5px;
}

.image {
  padding: 5px;
  width: 100px;
  height: 100px;
}

.content_title {
  margin-top: 5px;
  height: 30px;
  font-size: 14px;
}

.content_desc {
  top: 35px;
  font-size: 12px;
}

</style>