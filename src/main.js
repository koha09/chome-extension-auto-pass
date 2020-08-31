import * as $ from 'jquery'
$(function(){
    td = $("#mainPanel>table>tbody>tr:even>td tbody")
    for (i = 0; i < q.length; i++) {
        min = 9000000;
        for (j = 0; j < q[i].children.length; j++) {
            ii = q[i].children[j].children[0].children[0].value;
            if (ii < min)
                min = ii;
        }
        $("input[value=" + min + "]").trigger("click")
    }
    $("input#ButtonVse").trigger("click");
})