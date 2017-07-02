var debug = true;

var gulp=require("gulp"),
    jade=require("gulp-jade"),
    less=require("gulp-less"),
    minCss=require("gulp-minify-css"),
    jsMin=require("gulp-uglify");

gulp.task("Jade",function () {
    gulp.src("src/jade/*.jade")
        .pipe(jade())
        .pipe(gulp.dest("dist/pages"));
});

gulp.task("Less",function () {
    gulp.src("src/less/*.less")
        .pipe(less())
        .pipe(gulp.dest("dist/css"));
});

gulp.task("jsMin",function () {
    if(debug){
        gulp.src("src/js/*.js")
            .pipe(gulp.dest("dist/js"));
    }
    else {
        gulp.src("src/js/*.js")
            .pipe(jsMin())
            .pipe(gulp.dest("dist/js"));
    }

});

gulp.task("minCss",function () {
    gulp.src("dist/css/*.css")
        .pipe(minCss())
        .pipe(gulp.dest("dist/css"));
});

gulp.task("default",["Jade","Less","minCss","jsMin"]);
