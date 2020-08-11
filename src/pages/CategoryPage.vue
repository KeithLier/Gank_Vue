<template>
  <div>
    <nav-bar title="分类"></nav-bar>
    <el-tabs :stretch="true" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="专题分类" name="Article"></el-tab-pane>
      <el-tab-pane label="干货分类" name="GanHuo"></el-tab-pane>
      <el-tab-pane label="妹子图" name="Girl"></el-tab-pane>
    </el-tabs>
    <div class="category_list">
      <el-row>
        <el-col :span="12" v-for="(category, index) in categories" :key="index">
          <el-card class="category_card">
            <img
              :src="category.coverImageUrl"
              class="image"  @click="didSelected(category)"
            />
            <div>{{category.title}}</div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import navBar from "@/components/NavBar.vue";
import axios from 'axios'

export default {
  name: "CategoryPage",
  components: {
    navBar,
  },
  data() {
    return {
      activeName: "Article",
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.name;
      this.getCategories();
    },

    getCategories() {
      let category = this.activeName;
      axios
        .get("https://gank.io/api/v2/categories/" + category)
        .then((response) => {
          let data = response.data.data;
          this.categories = data;
        })
        .catch((error) => {});
    },

    didSelected(category) {
      this.$router.push({
        path: 'ContentList',
        query: {
          category: this.activeName,
          type: category.type
        }
      })

    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .category_card {
    margin: 10px;
    height: 180px;
  }

  .image {
    width: 130px;
    height: 130px;
  }

</style>