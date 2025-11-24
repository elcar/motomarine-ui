import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssNested from 'postcss-nested';
import postcssCustomMedia from 'postcss-custom-media';
import postcssPxToRem from 'postcss-pxtorem';
import postcssUrl from 'postcss-url';
import autoprefixer from 'autoprefixer';

export default {
    plugins: [
        postcssImport(),
        postcssMixins(),
        postcssNested(),
        postcssCustomMedia(),
        postcssUrl({
            url: 'inline', // Inline assets as Base64 strings
            maxSize: 1000,  // Maximum file size to inline (in KB)
            fallback: 'copy', //  assets that exceed the maxSize      
        }),
        postcssPxToRem({
            rootValue: 16, // Base pixel value
            propList: ['*'], // Properties to convert
            exclude: /node_modules/, // Exclude certain files if necessary
        }),
        autoprefixer({
            overrideBrowserslist: ['last 2 versions', 'IE 11'],
        }),
    ],
};
