import React, { Component } from 'react'
import Head from 'next/head';
import Router from 'next/router';

const MyHead = (props) => {
    const { title, keywords, description } = props;
    return (
        <Head>
            <title>{title || '犀鸟公考-犀鸟公考 - 大学生职业教育服务平台 公考、招教、部队文职'}</title>
            <meta name="keywords" content={keywords || '犀鸟公考是大学生职业教育服务平台，通过“在线直播+督学系统+游戏化激励+AI”的方式，让考试有效也有趣！提供公务员、事业单位、教师招聘、部队文职等考试服务'} />
            <meta name="description" content={description || '犀鸟公考，公考，招教，部队文职，公务员，事业单位，教师招聘，公务员考试网，国家公务员考试网，国考，省考，国家公务员考试，公务员培训'} />
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no" />
            <link data-n-head="ssr" rel="icon" type="image/x-icon" href="/static/favicon.ico"></link>
            {/* {
                process.env.NODE_ENV !== 'production' && (
                    <link rel="stylesheet" type="text/css" href={'/_next/static/css/styles.chunk.css?v=' + Router} />
                )
            } */}
        </Head>
    )
}
export default MyHead;
