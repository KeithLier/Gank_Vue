<template>
  <div>
    <div class="content_list">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="暂无更多数据"
          :error.sync="error"
          :immediate-check="false"
          error-text="请求失败，点击重新加载"
          @load="onLoad()"
        >
          <el-row v-for="(item, index) in results" :key="index">
            <el-card :body-style="{ padding: '0px' }">
              <div class="content_card">
                <img :src="item.images[0]" v-if="item.images.length > 0" class="image" />
                <div class="content_view" style="padding: 14px;">
                  <div class="content_title">{{item.title}}</div>
                  <div class="content_desc">{{item.desc}}</div>
                </div>
              </div>
            </el-card>
          </el-row>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ContentList",
  data() {
    return {
      results: [],
      page: 1,
      count: 20,
      pageCount: 0,
      isLoading: false, // 下拉刷新
      loading: false, // 上拉加载更多
      finished: false, // 控制在页面往下移动到底部时是否调用接口获取数据
      error: false, // 请求报错


    };
  },

  mounted() {
    this.getContentList();
  },

  methods: {
    getContentList() {
      let category = this.$route.query.category;
      let type = this.$route.query.type;
      axios
        .get(
          "https://gank.io/api/v2/data/category/" +
            category +
            "/type/" +
            type +
            "/page/" +
            this.page +
            "/count/" +
            this.count
        )
        .then((response) => {
          this.pageCount = response.data.page_count;
          let results = response.data.data;
          if(this.page == 1) {
            this.results = results;
          } else {
            this.results = [...this.results, ...results];
          }
          if (this.page >= response.data.page_count) {
              this.finished = true
            } else {
              this.finished = false
            }
            this.loading = false
        })
        .catch((error) => {});
    },
    onLoad() {
       if (this.page >= this.pageCount || !this.results.length) {
        this.finished = true
        this.loading = false
        return
      }
      this.page += 1
      this.getContentList()
    },
    onRefresh() {
      this.page = 1;
      this.getContentList();
    }
  },
};
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

.van-list__error-text {
  display: none;
}
</style>