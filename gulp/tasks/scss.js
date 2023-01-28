import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';
import cleanCss from 'gulp-clean-css';
import autoPrefixer from 'gulp-autoprefixer';
import GroupCssMediaQueries from 'gulp-group-css-media-queries';

const sass = gulpSass(dartSass);

export const scss = () => {
    return (
        app.gulp
            .src(app.path.src.scss, { sourcemaps: app.isDev })
            .pipe(
                app.plugins.plumber(
                    app.plugins.notify.onError({
                        title: 'SCSS',
                        message: 'Error: <%= erroe.message %>',
                    })
                )
            )
            .pipe(app.plugins.replace(/@img\//g, '../img/'))
            .pipe(
                sass({
                    outputStyle: 'expanded',
                })
            )
            .pipe(app.plugins.if(app.isBuild, GroupCssMediaQueries()))
            .pipe(
                app.plugins.if(
                    app.isBuild,
                    autoPrefixer({
                        grid: true,
                        overrideBrowserslist: ['last 3 versions'],
                        cascade: true,
                    })
                )
            )
            // Якщо потрібен не стиснутий файл стилів
            .pipe(app.gulp.dest(app.path.build.css))
            // Якщо потрібен стиснутий файл
            .pipe(app.plugins.if(app.isBuild, cleanCss()))
            .pipe(
                rename({
                    extname: '.min.css',
                })
            )
            .pipe(app.gulp.dest(app.path.build.css))
            .pipe(app.plugins.browsersync.stream())
    );
};