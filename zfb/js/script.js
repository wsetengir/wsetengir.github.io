 document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    
    // 设置正确的生日福星和启动密钥
    const correctUsername = "李浩"; // 这里更改为你期望的生日福星名称
    const correctPassword = "0601"; // 这里更改为你期望的启动密钥（生日福星的生日）
    
    // Login functionality
    loginBtn.addEventListener('click', function() {
        login();
    });
    
    // 添加按回车键登录功能
    passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            login();
        }
    });
    
    function login() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        // 验证输入是否为空
        if (!username || !password) {
            errorMessage.textContent = '请输入生日福星和启动密钥';
            errorMessage.style.color = '#ff3860';
            return;
        }
        
        // 验证输入是否正确
        if (username === correctUsername && password === correctPassword) {
            // 登录成功
            errorMessage.textContent = '验证成功，即将进入生日Party...';
            errorMessage.style.color = '#4CAF50';
            
            // 保存用户名到本地存储
            localStorage.setItem('birthdayUser', username);
            
            // 延迟跳转，显示成功消息
            setTimeout(function() {
                window.location.href = 'pages/birthday.html';
            }, 1500);
        } else {
            // 登录失败
            if (username === correctUsername) {
                // 用户名正确但密码错误
                errorMessage.textContent = '密钥是你的生日哦!';
            } else {
                // 用户名错误
                errorMessage.textContent = '生日福星或启动密钥不正确';
            }
            errorMessage.style.color = '#ff3860';
            
            // 让错误信息轻微晃动，提示用户
            loginBtn.classList.add('shake');
            setTimeout(function() {
                loginBtn.classList.remove('shake');
            }, 500);
        }
    }
    
    // 清除错误信息
    usernameInput.addEventListener('input', clearError);
    passwordInput.addEventListener('input', clearError);
    
    function clearError() {
        errorMessage.textContent = '';
    }
});