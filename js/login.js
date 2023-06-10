function on_click(){
                var input2 = document.getElementById("input2").value.trim();
                var input3 = document.getElementById("input3").value.trim();
            
              
				if(input2 == "" ){
                    alert("账号不能为空！");
                    return false;
                }
				
                if(input3 == "" ){
                    alert("密码不能为空！");
                    return false;
                }
				

                alert("登录成功！");
				form.submit()
                return true;
            }