import versionNumber from "gulp-version-number";
import pug from "gulp-pug";
export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "HTML",
          message: "Error <%= error.message %>",
        }),
      ),
    )
    .pipe(
      pug({
        // Сжатие HTML файла
        pretty: !app.isBuild,
        // Показывать в терминале какой файл обработан
        // verbose: true,
        // all doc https://pugjs.org/api/reference.html
      }),
    )
    .pipe(app.plugins.replace(/@img\//g, "images/"))
    .pipe(
      app.plugins.if(
        app.isBuild,
        versionNumber({
          value: "%DT%",
          append: {
            key: "_v",
            cover: 0,
            to: ["css", "js"],
          },
        }),
      ),
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browsersync.stream());
};
