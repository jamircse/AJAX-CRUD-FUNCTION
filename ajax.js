<script language="JavaScript">
    $(document).ready(function() {
        $('#YOUR_FORM').submit(function() { // catch the form's submit event
            $.ajax({ // create an AJAX call...
                data: $(this).serialize(), // get the form data
                type: $(this).attr('method'), // GET or POST
                url: $(this).attr('action'), // the file to call
                success: function(response) { // on success..
                    $('#DIV_CONTAINING_FORM').html(response); // update the DIV 
                }
            });
            return false;
        });
    });
</script>

<script type="text/javascript">
    var frm = $('#FORM-ID');
    frm.submit(function () {
        $.ajax({
            type: frm.attr('method'),
            url: frm.attr('action'),
            data: frm.serialize(),
            success: function (data) {
                $("#SOME-DIV").html(data);
            },
            error: function(data) {
                $("#MESSAGE-DIV").html("Something went wrong!");
            }
        });
        return false;
    });
</script>

$(".update").click(function() {

                     var id= $(this).attr('st-id');
                     var csrfmiddlewaretoken=
                        $.ajax({
                            type: $(this).attr('method'), // GET or POST,
                            url: $(this).attr('href'),
                            data: $(this).serialize(), // get the form data
                            success: function() {
                                alert('The post has been update!')
                            },
                        });


    $(".delete").click(function() {
                            $.ajax({
                                type: $(this).attr('method'), // GET or POST,
                                url: $(this).attr('href'),
                               // data: $(this).serialize(), // get the form data
                                success: function() {
                                    alert('The post has been delete!')
                                },
                            });
                        });
