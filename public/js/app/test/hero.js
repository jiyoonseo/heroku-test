"use strict";
class Hero {
    constructor(name, state) {
        this.name = name;
        this.state = state;
        this.state = "inactive";
    }
    toggleState() {
        if (this.state == "inactive") {
            this.state = "active";
        }
        else {
            this.state = "inactive";
        }
    }
}
exports.Hero = Hero;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvaGVyby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7SUFFQyxZQUFtQixJQUFZLEVBQVMsS0FBYztRQUFuQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBUztRQUVyRCxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztJQUN6QixDQUFDO0lBRU0sV0FBVztRQUNqQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLFVBQVUsQ0FBQyxDQUFBLENBQUM7WUFDNUIsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7UUFDdkIsQ0FBQztRQUFBLElBQUksQ0FBQSxDQUFDO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUM7UUFDekIsQ0FBQztJQUNGLENBQUM7QUFHRixDQUFDO0FBaEJZLFlBQUksT0FnQmhCLENBQUEiLCJmaWxlIjoidGVzdC9oZXJvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEhlcm97IFxuXHRcblx0Y29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHN0YXRlPzogc3RyaW5nKXtcblxuXHRcdHRoaXMuc3RhdGUgPSBcImluYWN0aXZlXCI7XG5cdH1cblxuXHRwdWJsaWMgdG9nZ2xlU3RhdGUoKXtcblx0XHRpZih0aGlzLnN0YXRlID09IFwiaW5hY3RpdmVcIil7XG5cdFx0XHR0aGlzLnN0YXRlID0gXCJhY3RpdmVcIjtcblx0XHR9ZWxzZXtcblx0XHRcdHRoaXMuc3RhdGUgPSBcImluYWN0aXZlXCI7XG5cdFx0fVxuXHR9XG5cblxufSJdfQ==
