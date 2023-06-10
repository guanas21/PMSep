 function on_click(){
                var input1 = document.getElementById("input1").value.trim();
                var input2 = document.getElementById("input2").value.trim();
                var input3 = document.getElementById("input3").value.trim();
                var input4 = document.getElementById("input4").value.trim();

               
                if (input1.indexOf("@") == -1){
                    alert("邮箱格式不正确！");
                    return false;
                }

               if(input2 == "" ){
                    alert("账号不能为空！");
                    return false;
                }
				
				if(input3 == "" ){
                    alert("密码不能为空！");
                    return false;
                }
				 if(input3 !== input4){
                    alert("两次输入密码不一致！");
                    return false;
                }


                alert("注册成功！");
				form.submit()
                return true;
            }