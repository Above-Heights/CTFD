import{$ as t,u as r,y as c,C as l}from"./main.7c3a8e99.js";import"../echarts.e8baadb1.js";function f(o){const e=t(this).data("submission-id"),i=t(this).parent().parent(),s=i.find(".chal").text().trim(),n=i.find(".team").text().trim(),a=t(this).parent().parent();r({title:"Delete Submission",body:"Are you sure you want to delete correct submission from {0} for challenge {1}".format("<strong>"+c(n)+"</strong>","<strong>"+c(s)+"</strong>"),success:function(){l.api.delete_submission({submissionId:e}).then(function(d){d.success&&a.remove()})}})}function m(o){let e=t("input[data-submission-id]:checked").map(function(){return t(this).data("submission-id")}),i=e.length===1?"submission":"submissions";r({title:"Delete Submissions",body:`Are you sure you want to delete ${e.length} ${i}?`,success:function(){const s=[];for(var n of e)s.push(l.api.delete_submission({submissionId:n}));Promise.all(s).then(a=>{window.location.reload()})}})}function g(o){let e=t("input[data-submission-id]:checked").map(function(){return t(this).data("submission-id")}),i=e.length===1?"submission":"submissions";r({title:"Correct Submissions",body:`Are you sure you want to mark ${e.length} ${i} correct?`,success:function(){const s=[];for(var n of e){let a=l.fetch(`/api/v1/submissions/${n}`,{method:"PATCH",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({type:"correct"})});s.push(a)}Promise.all(s).then(a=>{window.location.reload()})}})}function u(o){const e=new URLSearchParams(window.location.search);e.has("full")?e.delete("full"):e.set("full","true"),window.location.href=`${window.location.pathname}?${e.toString()}`}function h(o){let e=t(o.currentTarget),i=e.find("i"),s=e.parent().find("pre");s.hasClass("full-flag")?(s.text(s.attr("title").substring(0,42)+"..."),s.removeClass("full-flag"),i.addClass("fa-eye"),i.removeClass("fa-eye-slash")):(s.text(s.attr("title")),s.addClass("full-flag"),i.addClass("fa-eye-slash"),i.removeClass("fa-eye"))}function p(o){let s=t(o.currentTarget).parent().find("pre").attr("title");navigator.clipboard.writeText(s),t(o.currentTarget).tooltip({title:"Copied!",trigger:"manual"}),t(o.currentTarget).tooltip("show"),setTimeout(function(){t(o.currentTarget).tooltip("hide")},1500)}t(()=>{t("#show-full-flags-button").click(u),t("#show-short-flags-button").click(u),t(".show-flag").click(h),t(".copy-flag").click(p),t("#correct-flags-button").click(g),t(".delete-correct-submission").click(f),t("#submission-delete-button").click(m)});
