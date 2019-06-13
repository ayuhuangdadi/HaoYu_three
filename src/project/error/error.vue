<template>
    <div>
        <div class="wrapper">
            <div class="content">
                <div id="whoops"></div>
                <p>The page you are looking for seems to be missing.<br/>
                <a href="javascript:history.go(-1)">Go back</a>, or return to <a href="#">yourcompany.com</a> to choose a new direction.<br/>
                Please report any broken links to <a href="mailto:yourcompany.com">our team</a>.</p>
                <div id="divider"></div>
                <div class="search">
                    <div class="input-box">
                        <input onfocus="if(this.value=='find what you're looking for')this.value=''" onblur="if(this.value=='')this.value='find what you're looking for'" name="search" value="find what you're looking for" type="text" />
                    </div>
                    <input class="submit" value="Search" type="submit" />
                </div>
                <div class="menu">
                    <a href="#">home</a><span class="separator">|</span>
                    <a href="#">about</a><span class="separator">|</span>
                    <a href="#">services</a><span class="separator">|</span>
                    <a href="#">gallery</a><span class="separator">|</span>
                    <a href="#">blog</a><span class="separator">|</span>
                    <a href="#">contact</a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import error from "./error.css"
export default {
    
}
</script>
