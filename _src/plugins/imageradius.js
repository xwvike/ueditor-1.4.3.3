/**
 * imageRadius
 */

UE.plugins['imageradius'] = function () {
    var me = this;

    /**
     * 设置图片圆角
     * @command imageradius
     * @method execCommand
     * @param { String } cmd 命令字符串
     * @param { String } value 传入的圆角值
     * @example
     * ```javascript
     * editor.execCommand( 'imageradius', '10px' );
     * ```
     */

    /**
     * 查询当前选区内容的圆角大小
     * @command imageradius
     * @method queryCommandValue
     * @param { String } cmd 命令字符串
     * @return { String } 返回当前圆角大小
     * @example
     * ```javascript
     * editor.queryCommandValue( 'imageradius' );
     * ```
     */
    me.commands['imageradius'] = {
        execCommand:function (cmd, value) {
            var range = this.selection.getRange();
            if(!range.collapsed){
                var img = range.getClosedNode();
                if (img && img.tagName == 'IMG') {
                    img.style.borderRadius = value;
                    range.selectNode(img).select();
                }
            }
        },
        queryCommandValue:function () {
            var range = this.selection.getRange();
            if(!range.collapsed){
                var img = range.getClosedNode();
                if (img && img.tagName == 'IMG') {
                    return img.style.borderRadius;
                }
            }
        }
    }
}
