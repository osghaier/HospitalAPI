



{


    console.log("home js file");
    $('#SignIn').empty();
    $('#SignUp').empty();
    $('#SignUp').append('<a href="/user/logout">Logout</a>');


    $('#SearchForm').submit(function(e){
        e.preventDefault();
        console.log("sub",$('#SearchForm').serialize());
        $.ajax({
            type:'post',
            url:'/patient/search',
            data:$('#SearchForm').serialize(),
            success:function(data){
                console.log(data.id == " ");
                if(data.id == " "){
                    RegisterDiv();
                }else{
                    patientDiv(data);
                }
            },error:function(error){
                console.log(error);
            }        
        })
    });




    let RegisterDiv = function(){
        let box = $('#registerbox');
        box.empty();
        box.append($(`
        <div id="outer">
        <h3>Registration Form</h3>
        <form id="registerForm">
            <div class="innerBox">
                <label for="Pname">Patient  Name : </label>
                <input type="text" name="Pname" id="Pname" placeholder="Full Name" required="true" >
            </div>
            <div class="innerBox">
                <label for="Mnumber">Mobile Number : </label>
                <input type="text" name="Mnumber" id="Mnumber" placeholder="Number" required="true">
            </div>
            <div class="innerBox">
                <label for="age">Patient Age : </label>
                <input type="number" name="age" id="age" placeholder="age" required="true">
            </div>
            <div class="innerBox">
                <label for="gender">Patient Gender : </label>
                <input type="text" name="gender" id="gender" placeholder="sex" required="true">
            </div>
            <div class="innerBox">
                <label for="email">Patient Email : </label>
                <input type="email" name="email" id="email" placeholder="email" required="true">
            </div>
            <div class="innerBox">
                <label for="Address">Patient Address : </label>
                <input type="text" name="Address" id="Address" placeholder="address" required="true">
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
        `));


        $('#registerForm').submit(function(e){
            e.preventDefault();
            console.log("sub",$('#registerForm').serialize());
            $.ajax({
                type:'post',
                url:'/Patient/register',
                data:$('#registerForm').serialize(),
                success:function(data){
                    console.log(data);
                    patientDiv(data);
                },error:function(error){
                    console.log(error);
                }        
            })
        });



    }




    let patientDiv = function(data){
        let box = $('#registerbox');
        box.empty();
        box.append($(`
        <div id="outer">
            <h3>Patient Details</h3>
            <div id="registerForm">
                <p>${data.Name}</p>
                <p>${data.Mnumber}</p>
                <p><a href="/Patient/all_reports?id=${data.id}">Profile</a></p>
                <p><a href="/doctor/profile?id=${data.id}">Create Report</a></p>
            </div>
        </div>
        `));
    }
    


}