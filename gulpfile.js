var gulp = require("gulp");
var sass = require("gulp-sass");
var web = require("gulp-webserver");
var cot = require("gulp-clean-css");
var uglify = require("gulp-uglify");
//编译scss //压缩css
gulp.task('min', function() {
    return gulp.src('./str/scss/**/*.scss')
        .pipe(sass())
        .pipe(cot())
        .pipe(gulp.dest('./str/css'));
});
//压缩js // 生成dist文件夹
gulp.task("yasuo", function() {
    return gulp.src("./str/js/**/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist/js"))
})

//起服务
gulp.task("webt", function() {
        return gulp.src("./str")
            .pipe(web({
                port: 8080,
                livereload: true,
            }))
    })
    //监听事件
gulp.task("watt", function() {
    return gulp.watch("./str/scss/**/*.scss", gulp.series("min"))

})