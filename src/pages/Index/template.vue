<template>
    <div id="index">
        <ul class="blogs">
            <li class="blog" v-for="blog in blogs" :key="blog.id" :to="`/detail`">
                <div class="user">
                    <img class="avatar" :src="blog.user.avatar" alt="blog.user.username">
                    <p>{{blog.user.username}}</p>
                </div>
                <article class="article">
                    <h3 class="title">
                        {{blog.title}}<span class="date"></span>
                    </h3>
                    <p class="content">{{blog.description}}</p>
                </article>
            </li>
        </ul>
        <el-pagination
        layout="prev, pager, next"
        :total="total"
        :current-page="page"
        @current-change="onPageChange">
      </el-pagination>
    </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" scoped lang="less"></style>