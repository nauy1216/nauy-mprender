const mp = require('miniprogram-render')
const getBaseConfig = require('../base.js')
const config = require('../../config')

function init(window, document) {require('../../common/index.js')(window, document)}

Page({
    ...getBaseConfig(mp, config, init),
    
    
    
})
