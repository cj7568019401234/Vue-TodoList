<template>
    <div id="app">
        <nHeader></nHeader>
        <nTodoList></nTodoList>
        <nModal></nModal>
    </div>
</template>
<script>
    import nHeader from './components/Header.vue'
    import nTodoList from './components/TodoList.vue'
    import nModal from './components/Modal.vue'
    export default {
        name: 'App',
        components: {nHeader, nTodoList, nModal}
    }
</script>
<style>
    body,
    html {
        margin: 0;
    }
    
    .nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 54px;
        line-height: 54px;
        background-color: #001529;
        color: #faebd7;
    }
    
    .nav__logo {
        margin-left: 20px;
        font: bold 20px sans-serif;
        color: #faebd7;
    }
    
    .nav__add {
        height: 20px;
        width: 20px;
        margin-right: 20px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABL0lEQVRoQ+2ZzQqCQBSFzxQYLdolPYPUrvbVk2VPlu1zl/gMYbsWUZCGkOBfhF4nmjiznd97zjdXL6NgeFOGnx8M4J2D1yhc5fuGtuPpcFuLA7dT4Kpeb5M/cBLH28Fk6nYdhJYA7lG4A1BwAIBn2c6aAZQUoAN1SBChBheFCBGhBrjUDSVCRIgICRUgQkIBmYXeIHQAMC/1+ZbtLISCV6ZXHHgVI8vWGynYSDCtna8QIEHUdu0kjvfloqgQQFoG9oG0GPnZ9gDW+fKUAXzbqv92IFVTfImBUU0GyozyAVzauvbxErdduDzvfg6PlUykEFhjZ9bVHtk6/JDxX0jIFBEiQkRIqAAREgrILESEiJBQASIkFFBLFjL+mTUV1eiHbiEVjaZrQajRCYSDjQ/gCbRs5zE60rNJAAAAAElFTkSuQmCC");
        background-size: 100% 100%;
        border: 0;
        cursor: pointer;
    }
    
    .wrap {
        width: 80%;
        margin: 35px auto;
        color: #515151;
    }
    
    .collapse-panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 28px;
        font-size: 14px;
        padding: 0 10px;
        background-color: #faebd7;
        border: 1px solid #d9d9d9;
        border-radius: 4px 4px 0 0;
        cursor: pointer;
    }
    
    .collapse-panel--done {
        background-color: #a9a9a9;
        border-radius: 0;
        border-top: 0;
    }
    
    .center {
        display: flex;
        align-items: center;
    }
    
    .spread {
        display: inline-block;
        width: 14px;
        height: 14px;
        margin-right: 6px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD5UlEQVRYR+1WTWgdVRT+zsSIYEpAEQVB6kJ31oW6EQqiEAUxc+9NBn9i8trEqtRW/AGrFbX+0VbUUqyo1ZpYrYs+cs99ERuQiAi6UNudIghVURR00YUKqfAyR+5jZrh9nTfvJVbrwtnNnHO+75tzz88lnOaHTjM//jsChoeHV0VRdEV/f//her3+xz+RmTiOr4+iaA2Ao8xsPUeRAa31RwCuAfD10tLSxNzc3OFTKUIpdTsRvZ1hfs/MF7cLOAggaX0k+kFEJpj541Mhwhhzh4i8HmAdYeYr2wVcSkQHRKRlAHAsTdPxRqNx6O+I0FrfA2BPjkFEn6VpOuacO3qCAP+SJMkFzWbzAIBrs4A/AYwzc30lIowxD4rI83msiCwQ0Rgz/1oIagceGho6e2Bg4B0RUYHq9dbameWI0Fo/CuCZIIYHBwdvm5mZOR7idGxDrfVbACYC9Zudc0Uqq8QopZ4ioscCn/3MXCuLqZwDxpiXRGRTEPgwM++sIjfG7BSRh4Ls7bHWbu4U03UQaa2fBbA1yMTTzrnHywC11rsB3BuQb7fWFrHLzkAeoLXeAmBHALCLmR8IAbXWrwK4KxC61Tm3vVvddM1ADmCM2SgiLwd/t9da2yI0xkyLyLqAbBMzF75VIgoBSqltRPSEiDzpnNtWFmSMGReR/YHNt2wE4NbgW42ZQ5/ClHFsIKIPrLXrvSEcxd8BWJ15n5TiHEUppYjIE6xqE/k7EdWstVwmXim1i4juy23M3OI+KQNB8JvMPNUB7Doi8m16YWb/SURqzrkPO/hPE1F4RAeZ+eYTBPgXrfX9AF4Mznl2cXFxcn5+/rd2YGPMVflxZOSft/skSTLYbDanPXRge42Z7y44SoCnROSNoJoXRGSy0Wj8WEJwHoCler1+rMR2UUaej3XvsoOZHwl9S7tAa+234rsAzsicvwAwycxfVlV0bhsZGVkjIvuCxeY37BZr7XPt8VWj+AYAvsrPyYK+IaJJa+2nVSLiOF4bRdE+AJcEfncyc7iOC1PlHBgdHb06TVO/mFqXBwC/ENGUtfb9MhFxHN8URZEnOj+zLwLwbdlxm3YdRHEcXxZFkb/JXJ6BHk/TdKrRaPgjKh6t9RgAXztnZR9/jqKoNjs7u1CVsa4CfLBSanXW+2uD4tzonHvFv7dPSQBfZZ1xpFvN9CTAg2itzwXge//GADSv6HDmf5L9+bfdyL29ZwHeOUmSM5vNphdxSxk4Eb3X19e3rqwtO4lZloAcRGu9F8CGNlB/6fDTTnr589xnRQKyI3kBQL6SdzNzMef/FQFZcba2Zqft2YuQFWegF/BefP4X8Bea5Ygwe5uhrQAAAABJRU5ErkJggg==");
        background-size: 100% 100%;
    }
    
    .collapse {
        width: 14px;
        height: 14px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEFklEQVRYR9WXXWgdRRSAz1nvLeqDQaii6IP6UAWFiGADgiiK1Jf0zsy6KLlpcqMlta20PmgRFYlUhaKCWlIsWhvb+IOLc+YS5WIsFIqCiEJfFPFBlCJKFMFoIJq7c2TCbpi7uf8VSudpd87fN2fOzNlFOMcDz3F8OL8BpJQRM/9tjKn1m8m+M6CU2s7Mb6SBHyKit/qB6AtASvkYALzoB2TmR40xr/YK0TOAlPI5AHiqWSBEfEZrvb8XiJ4AhBDTiLgrC4CIqyDM/LwX9CUierxbiK4AoijasLKychQRRzzHe4noNfcuhNiLiK94ssNE9HA3EB0BpJSXA8DbAHBv5pCZtxtjjvgBckXpRO8NDg6OTk1N2XYgbQGklJsQ8RgzD6VO/gWAcSJ6v5nTUqk0EgTBUQDYkMo/LhQK5TiO/2wF0RJACLEZEY8DwKbU+I80+EftVqSU2srMMwBwaap3ylo7Wq1WzzQt3BYr2RIEwSwAbEzlZxBxXGt9spt9FULcjYgO4upU/7S1tlytVr/N26/LgJTyAQBwwS9Ilb9j5nFjzJd54yiKLgOAJI5jl52GUSqVhoIgcLVzfSr4ARHLWusvfMUGAKXULmae9hS+ttaONSNXSt3KzMecbivAMAxvtNY6nVtSn78BQJmIPs1irAFIKd2ZdpdMNk4h4pjW+qf86qSUdwGAc3yVkyHiz0mSVKrV6om8rhDiGlfIAHB7KvuHmcvGmA9XbTMDKSV7xrV6vT42Nzf3e5PgpTT4JTnZX2mdUN5meHh4Y6FQcAWdHeUfiejaPIArsJsB4MTAwMC2mZmZ5SarGU1PRiY6DQDunGcpdvMVInJ73zCiKLqoXq+7TNznClRrPdEAkDdoEnwnIh7y5j8LguDBJEksIr4JAHeu7SviHq31wU4+uwYQQuxDxAOZQ2b+JAiCCa31L24uTbGDcNuzOlyf0Fq/0Ami41WslNrPzE97jvTy8vJErVZb9J1PTk4WFxYWjiDiNm/+ABE90Q6i01Xs+vseb+XHi8XiRBzHSSunSqmDzPyIZ3PIGLO7lX67q9h1v4pn+DoR7eyUUieXUrr2/KSnO0tEfmbWROsAKpXKhYuLi7PMHHqreNkY476Cuh75ugGA6tLSUnl+fn7Jd9IA4K7Wer3+DgDc4xXTs1rrqa4je4pCiElEPOxNnSwUCiNxHP+65j97CMPwuiRJ3kXErPU60T4iavj26xVEKXU/M7sP1ovT0/GVuwmJ6PvV98yhUupzZr7NW/lurbV/7nuNvaYfhuEWa63rjlekEHNa660NAFLKBQBw3c2NprdZ3wQAEIbhUApxAwB8Q0Q3NQAIISpBENxhrf3gbH402kEqpa601u4oFovTcRy7znie/5qdzZasOwX/h7N+fPwHQZWaMDnMa9EAAAAASUVORK5CYII=");
        background-size: 100% 100%;
    }
    
    .empty {
        flex-direction: column;
        padding: 36px 0;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.25);
        border: 1px solid #d9d9d9;
        border-top: 0;
    }
    
    .list {
        border: 1px solid #d9d9d9;
        border-top: 0;
    }
    
    .todo-icon {
        display: inline-block;
        width: 18px;
        height: 18px;
        margin-right: 4px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAFjUlEQVRoQ+1ZW2gdRRj+/z15UNGkeSre6u3J+4NCRSsoamm16dmZNMUqSARNsWKtL2JVaAreQLBSsdLoQxC0YJr5Z5uW0NJiwQgt6IP19qTWapU+xQRvEHZ/mbAb50x2z17OOQ+BDoTA2f/yff/M/LPzLcISH7jE8cN5AskM1uv1K2u1Wh8A3MTMKwAg+TMmZ8wfIpr/34RhOBEEwS/tmP2WZsD3/dsAYDUirgaAe0oCOs7MRwDgiNb6y5K+C+aVCBjgnucNMfNQ1cS2HyKORFE0UoVIaQJSyr0ZwE8DwEeIOBmG4XStVpvu7u6eNkBnZ2d7wzDsrdVqvcy8FgAeBYCrXfKGiFJqc5milCIghPgMAFY51ZsAgA+VUvvLJJZSbgCAx5jZ7Bt7TBHR3UVjFSbg+/7PiGg25vxAxAlmHiGig0WTpdkJIdYholmOC0SY+YzW+qoicQsREEKwE2w7Eb1RJEFRGyHECwDwum1PRLn4cg2EEF8BwC1W5aVSiooCK2MnpRTMrCyfU0R0a7MYTQkIIT4BgIEkQJGKlAGcZevM+BgRbcyyzSTgdhtmvr1Km6tCyLRpRPzCmvXM7pRKwA3AzJu11iNVwFT18X1/CBH3Jv5ZBUwlYFffdBul1PqqQFrxk1IeSLpT1hmxiIBbfQDoc1tlvV6/ARHf8jxvWRiGzwZBcLIK0Lw4psUCgDln5kfaLKQR2IGIw0mvd6tfr9dXep53wgYcRdGNQRB8V4ZE0Tj2LDDzsNZ6p51nEQEp5QlmXhkzfkRrvc92sJ9blTmstV5ThkDROL7vb0LEj+OCnlRK3ZFJoL+//9ooin6IDc4S0RUuqKKJ88iUiSOE+BUALjcxPc+7bnx8/MeFDuVU9xlm3h2zfVsp9ZwLpOjU5xEoE0dKuYuZt8W4tiql3skisIeZn4oNVymlPk8Dkrf58sAnz4vGkVLexcxTMa73lFJbUgkIIcyL2UPmYZWNWRR4WTtD1PO8b2O/Q0RkutP8aNjEQohTAHBzzPQypdTvZZN1wl5KeSkz/xbH/pqI/n83sxMKIf4AgB7zW09Pz4Wjo6P/dgJQ2ZiDg4MXzMzM/BP7zRDRsqwZyCTg+/42RNxVNnlF++eJ6M3EtwyBzCUkhHgYABrOhIrgct2Y+XGt9WhiWGYJZW5iIcQDRkHIzd4GgyiK1gRBcNjuVoU2sZQys4329fVd1NXV9Vcb8OWG6OrqumRsbOxPawaKtVEp5RZmfjd2fJWIXnY2+TgAyFwErRlMEtGDTt5XAOCluDs+rZTak7qJjbrmeZ5Rz8w4TUTX2IGklE8w8/ut4WvujYhPKqU+cAj8lMgwURStsFW9RS9zQohPE5UNEQdcuUQIcRQA7usQiWNEdL9TtA3MPBb/dpyI7rWfp71Ob0fE1+LpWnSZkVKuZ+agEwQQsa6UOuAQWLjUMPOLWusG5aLShcb3/WFE3NFmEhuJKKn0fOhKFxrjWORK2U4SzLxTaz1/icqqfuErpQmQcq1MFbKEEEZyMdJL5ZEF3hW6Sl3q3VmI90OqoBXvia0VNvYxRNztrvk4d4PA1Uz0zRO2GsTcZsJW3GLNGWHU52ZDGQXbbZVO27SlzKZib6606Iq6eQLXwMDAxXNzc3cCwHJEXG6AMfM5ADgXhuHUxMTE31nsUvSoXJE3l0DcDRrE3U4IXa6QZfIWkTILEYhJuCJvx+R1AMgVdZNZLEwgJtEg9iaHXRRF+1z5Ja8tGbnE87xNKR84moq5btxSBNK6kxXwLCKag2h/s09MAGBeDUz7nZdJ7NHxT0xJsiX9kc+uWPyZdZ3neWsTNS9v6SysXcSTURRNAsDBVmT70ksoC6BR9ZjZSDLX53zo/h4RD9nqWlHSaXZtI9AKiFZ8zxNopXrt8P0P/m05Xj6y0aAAAAAASUVORK5CYII=");
        background-size: 100% 100%;
    }
    
    .done-icon {
        width: 18px;
        height: 18px;
        margin-right: 4px;
        background-image: url("data:image/png;base64,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");
        background-size: 100% 100%;
    }
    
    .box-icon {
        width: 42px;
        height: 42px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFqUlEQVR4Xu1aa4hVVRT+1r4jVCTVvygfZFrRAyrGMKPuXueOBtM7y4TSSiUIeoilEVhWFpRGZUIEJWnSi6KijJLp7HVqyIgmlBIKkrRSsB8RZTRSd86OPd2J6/HOnNedx2XO/nPg7PX81lp777XPIYzzQePcfxQAFBkwzhEoSmCcJ0CxCBYlUJRAExDwff+hJohJJUIpZZn54VRMDYhzl0BXV9eUtra2H/MakoU/DMNJlUplfxbeAZ7cAIjIawAWhGGYOxpJHXHRB+Cy7hVmvikpXyO6XAD4vj9XKbUNwD5mnpzHkLS8xpj9RHSStVZ7nvdJWv6mZICI7ABwrrX2Rs/zXs1qRBY+3/cXKqVeBvAFM8/KIsPxZM4AY8xdRLTeWms8z6tkNSAPn4h8CuBiAEuZeWMWWZkAEJFjAfwM4HgAM5m5J6pcRK4G8GgWoxrwrGLmd6Pvfd+frZT6DMCvEydOnNLe3v5XWn2ZADDGPEdEtwN4npnd84hRA+CdtAYNQn9NIwAcrTFmExHdDOBxZr4/rb7UAIhIO4AvnaLe3t7jOjs7/xgEgKPSGjMUPTMfGkSPy8LfanPnMPOuNHpTAxAEwTZr7VwiWq61fjqNsuGiNcY8QESPAHiLma9PoycVACLi9twtAPYw87Q0ioabVkR+AjDZWnuV53nvJdWXFoBvAZxhrb3c87wP6pUYY8pJlTaDLrr3i8gCAO5QtpOZz0uqIzEAIrIGwCoAHzJzZ4NVvxdAU+t+CCcOMfPR0XljTEBELhDLmHl9EhASAeD7/qmlUulra+0xSqnTyuXy91HhQRBk2oeTGNmIRmu9pEEQzgbwDYA/lVJnlstlt1UPORIBEATBZmvtIiJ6Smt9T5zQ0Zw3xmwkosXW2mc9z7s7zpZYAIwxlxHRVieImWPp4xSOxLyIuGYJSfqEWIcG6oqIbtNavzASDuTVISL3AlgHYCszXzGUvCEBEJE7AGwAsJuZZwwIEpGXRnDBS4qHWxhvHSA2xuwloqlhGC6uVCrO3oZjUAC6u7tPqFarXwE4hYgu0Vp3RwC4JallI0S3KQLApUT0EYDvqtXqrDlz5vzeyI5BATDGrCWiFUT0vtb6ynrmIAhmjpBTqdRorfuP6HWB6gLQYa1d43neg4kB8H3/AqXUdgClvr6+Ezs6On5JZckYIfZ9/2Sl1D4A1VrXujNqWsMMEJHXAdxAROu01ivHiD+ZzBAR168sG+z67AgAROQ6AG+20rYXh0zdtjjP87y36+kbAeBS/0Kl1JIwDH+IE55knpmDJHRRGhHRWfiiPEqpaWEYugPSdq31RXEA9B8imjjeYGbXqKQeIuI6z1y3vlGl0cNcowwYACBT1CIKXQT3ApjBzG4hSjxEpA2A6z6nA2iWLUecZgcFoBnHXhH5GECFiGZrrT9P7D0AEXE3vY5nBzOfn4a3Ee3AOpA4A5oEQP8FSpabY2PMZiJa5FpwZn6sJQHwfX+qUsqVAIjoPq312iSO1F1uoNbWulLINUYlA5zFIrIUQH8TpZSaVy6XD9uGol65D61KqdXufdw5Pg0iowaAMzIIgpXW2idqBj9TKpW2HDhwYNf8+fP/du96enomHDx48Cxr7XIiWlijW8HMT6ZxcijaUQXAGWaMuZaI7gTQv7cT0T/W2t0A+gCcDmBCzYHAWrshemDJC8SoAzDgQK0k5rrDFoBJtfd7rbXbiUiY+cW8zo6ZXSDOERGZrpTqK5fLe+Jo886PmQzI60hW/gKA2j3hiB6EskZrOPiKDCgy4L+r8qIEIt82hrUbHI5azioz9Row0r+9hWH4fzBqv8EN6Ws9fa3PiLvI6f+ZM3EJZEV6rPMlAWC1Q9dFIYpys5wbTtlxNlYqlcN+6439NhgnsNXnCwBaPYJ57S8yIC+Crc5fZECrRzCv/UUG5EWw1fnHfQb8C5UqY18LxmffAAAAAElFTkSuQmCC");
        background-size: 100% 100%;
    }
    
    .edit-icon {
        width: 18px;
        height: 18px;
        margin-left: 6px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADWElEQVRYR9WXXYgVZRjH//85B86RwjaJLFAQrCSy8iYwc3MLRDbYOe87e1lXeaXdtJSXURfdeaF4sRkadZMIw84864GlwuyEhHdRFLEoVJKkIrUYorCcmSfew5zDuJ11z+zsEZrbeWd+v+fj/SLuwzM5OflkmqYfq+qzAI6JyIcA1KE5bP7ExMQzlUqlRfKRHOvTOI7fHLpABj9P8mFV/UNVT3ued8iBVfUjETk4tAwYY3YAOOfgAK56nrdnZmbmkjHmA5LvZxLv9QR839/med4JALtJFhE7s7CwMNlqtdrdFGfwb0muz0CnROT13PtpkgdU9a8eyBgzT3LbKnriTrVafTQMw1vu2yXwmwAeyiSOishUo9HYTPI7kptV9UJPwFrb6UpVnQLww6AiSZJcazab8258EAQvpGl6Nov8MsndaZq+Q/Lt7N/TAF4juQXAjSRJRvsJvCIirUEFuuMcXFXPAXgQQAceRdGVLCtHuhLZ+BvtdvtlJ74mAo1GY5fneV/2gzug7/tPVCqVnwDUVXUhSZJd3ayVFsjgZwGsWxp5Dn4ewGMOrqp7ZmdnnUznKSVgjBkjObdaeCkBBwfwBckagCskX+zWfJDIS2XAWrtXVZtduKqOisjvuXm+heSF5dKeb/DCJRgfH6/V6/U/AWxwkS8DdzXfBOBmmqaj+ZovnV2FBYwx+0meVNXbSZJsbzabvy2JvAcn+WoURd/fa0oXFrDW/gLgaVWdFpG3BoX7vv9crVabD8NwcdUlyLr+m073klujKPo1W2hczZeN3Bjj3rtM/RjHsdukek+hDFhrIwBWVb8SkX3W2ucBuE3lDZIPuJr3S3tePI7juza6gQWCINikqpcBeAA+B7AVwM5uKK4nPM8b7VfzNRGw1h4G8G6fhroE4Hi1Wv0sDMO/+zVcaYGxsbH6yMjI9dz+3iYpqnpcRL5eaeMqLRAEweOq+rOquj3/xOLi4sm5ublrK4FzM8Qt2Z3mXXUP+L6/sVar/ROG4Z1BwWsqUBSaH1+6BGXg2TpRvgRlJP4fGTDGpO44XvRQOmBmdpA8oqoqIm4h++9SXOJYPqBD58R9UUTuOvrnl+KnAHyiqi8VvJisKOAid3cBAPvjOL7YNwMr/mVIA4pcwYai8C/pKmFOMUamxwAAAABJRU5ErkJggg==");
        background-size: 100% 100%;
    }
    
    .item-left {
        width: 95%;
    }
    
    .del-icon {
        width: 14px;
        height: 14px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA6UlEQVRYR+2XMQ7CMAxFcaUOrByElZVeoIqHch3KdcjgqBcoKysHYWWo1FQeGtFSEVctA5IzJt/Oz0uGfNgIhjGmBICzQBok3vuLc66M1UBMwOtFUWybpjlItL0mTdO7tfYVqwkG8jzfJ0myixWssd627bOqqgf3CgYQ8cqHXWMDQQ9LRKeBgb4IEb33PnPO3QSNxBJjzBEAaiIaXPvHG1ADUwQQsWbWRJS9M58zv+gK5mzEBqf0akAJKAEloASUgBJQAkpgEQGOZvzVGketOfOLDIg//1+E/2dgjVOPe0iT0S8zYsiEvbkO5M1eP/40mEoAAAAASUVORK5CYII=");
        background-size: 100% 100%;
    }
    
    .close-icon {
        width: 14px;
        height: 14px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABUklEQVRYR8WXzRmCMAyG200YRTcIXN3AJYAh3EDPZAQv7uEm8SmPIGB/ktAqR9rme5umSWrNnz876dd1fRqG4fYLHqdFRA9EfI4A7ocx5kpEPSJ2JSEAoLPWtkR0RMT77IHFQDEIn8YM4HZdEiJkewVQCiK2sS+A3BApr3oBckGkxJ1OEGAD0SFiL7kdHPEkgBYCAFprbUdESfCoB6YdL3aTNCgRZ3lAAiEVFwGkjkMjLgYIQWjFVQBbiNEIM+B8t4gVhL6FU2C6MU60h65wLgB1AVMBLJPM+whceVVBiAF8GY6b9XbHQExIC8H2AEeAM2frBRaAxLBkLisPSA1KS3mqHE9VTRzh3AIWa0jU4pICFmrJdotzIXxNaTZxDsS2Lc8unoJYPkyKiccgRoCmac5EdNHmc2Wz+nmaAUBljKncW01iTDsXAA5u7eptqDW2d90LGUC/MI2CDx8AAAAASUVORK5CYII=");
        background-size: 100% 100%;
    }
    
    .time-icon {
        display: block;
        width: 18px;
        height: 18px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD8UlEQVRYR8WXW4ibVRDH//MlK0KURVCLxXp5EkVFULSy+CDCKtbk+87ZxnrLuhXbIiJ9E+1L60tFvGBX0YIUV2tBGzNzvsV1cbFecFELrT5IV0RfRK0UH2ShQR+Sb+SUZM1mcyel5yWEby6/mXPOnBnCOV50jv1jIIAoisYBrCOidT4AVT0F4JRzbqHfgHoGiKLoZiKaVNUCEV0E4CSAP2sOLwOwXlX/JqKDRPQOM3/XC0xXAO84CILtqrpZVQ8BmHfOzbcybq01qhoBeADANBHtY+bfO4F0BLDWPq6qbwE4lCTJ3jiOl3qJKgzDO1Kp1E5VvT5Jkm1xHH/VTq8tgDEmBpBT1eecc3t6cdwsE0XRHiLa3clGSwBjzH4AO4Ig2FQqlT5u5zyKot0AfnXOzbSTmZiYuDdJkrl2EGsAjDEhAAfgLhH5rFPkxpjPVfXLbhmy1m5R1fcBZEXko0abrQAWAbwnIj4LHVevAN6ItfYNAJczc64tQBRFTxPR9nQ6fVOxWDw9TIBcLndNKpX6BsBkYxZWZcAYs6Sqh7ultA7WTwa8Tu1QXiEij9VtrADUCs0xIrqdmb/tFr3/3i+AtXajqs6KyKWtAPyV2SIi1/bifBCAms6PqvqEc+4L/38lA8aYN4noEmbefDYBrLUfAigy8wfNAExEfzDzU2cZ4DVV/VlEppsBPiGi48y8qw+Aw0SUBfAsM7/ai561di+A08zsf//fAmvtuwCqzLy1F0N1GWvtjiRJdhHRP0TkQaSTvrX27SRJFp1zB5oz8CKAG0Xk7n4AvGw+n7+gUqm85Ms3gIUgCJ4plUrft7JjjPGZnmbmuWaAvK+Ao6OjozMzM//2C1G7575neB3ARgCPiIh/vlfW1NTU+cvLy8tEdBUzn+klVm5BNpu9OJ1O/wXgURHx2zHwMsY83Oy8dgUnAWwVkTvX1IGagH+CqyJiB/beQdEYM6+qRxsr7apSbK0dU9XFJEnG4jj+epgQxhgf/fNEdEs9/au2oOFUv6CqG0TkoWEB1Lb3U1V1ze/Mmue4dlCOAVgSkfuHAeHfDCI6j5nHmu217IjCMLwuCIITAE6Uy+XbFhYWyoOAjI+PZzKZzFEAV4rIha1stO0J8/n81ZVKxXe/FVXd6Zw70g+EMeYeAL42/CAiD7bT7dgVFwqFTLlcfkVVfVv+8sjIyP5isfhLJ5Aoim4loid9+6Wq0916i65zQUOB2ebvMIDjquonoJNE5IcTPxmt94MJEd0H4AYiOlCpVPbNzs7+1C1rPQHUjYRhuCGVShUAbFJVP5adGc38WEZEfjybq1arB+M4/q2b45aFqFelYcr1lYFhOq7b+g8NNucwu2uUBwAAAABJRU5ErkJggg==");
        background-size: 100% 100%;
    }
    
    .date-icon {
        width: 18px;
        height: 18px;
        background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACR0lEQVRYR+1XMWgVQRB980t7sbUX1MLGSm0UBHHnPtdZa2FhY1JqtItaKGihWFnmy+6aQjAWxkokhWkEC02TwsJWSHcjc+yF9bv3b/NXwUAOPvy9tzPzbt7s7C5hxsPM70Tkvfd+KTXNGPNE33vvr6dwZq4BrDjnqC9ML6AGQwQU13nOuXM9BJeI6Pb/T8AYo0wvAzg5S5K/iG2KyCuVlowxy0S0SES+aZpHcRAi0hq4A2A9FVzTq+/DnNSUszpHRH6TaDQa3RARIyL3iJm3AXxN6cjMos77irCkBjpbJdAb5F8SCLKfmUmgruvDk8nkR4n2fT6yCJQEHrI9ILA/MlBV1YtIy1Vr7ctuzMw3ieh4GO9Ya691mDGmXf/dOLXEszLAzG8AnFdHRFRPEwBwP2DPEgTafUKb2NwEqqqKO9hPa+1G91VTGKy1XUBoBgDor31SjSwrA0NLqQTfHwSYudU46PwxUQNHokJbiAr0BIArKSwqVN2BZ7fieYuQmZXAZgi25py7MC1XlgTMfKszFJEv3vuVeBkCOBR95d3u/3g8PtU0zcUUtqcMlBTZkG1WBoaclOBZBLTbRUG2nHM2kkCPcF2BirV2NUrvbg8IfeCPE1Uugd5OWFXVUxG5GoIuOOcexAT0OBfG83dCZn4cfeV6vAwDgaMBf5sgUL4XlGg8ZJslwZCTEvyAQJyBTwC+O+d2O1dJanNtmfk1EX3Tm1F7gQTwQUTWch2UzCMiPeScBnCpvR2Ha7SSOFbieA+2n4noobX2+S8N8AAwS+WQNgAAAABJRU5ErkJggg==");
        background-size: 100% 100%;
    }
    
    .spread-rotate {
        transform: rotate(90deg);
    }
    
    .collapse-rotate {
        transform: rotate(-90deg);
    }
    
    input[type="checkbox"] {
        width: 16px;
        height: 16px;
        -webkit-appearance: none;
        border-radius: 2px;
        border: 1px solid #808080;
    }
    
    input[type="checkbox"]:checked {
        background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNElEQVRYR+2WPWhTURTH/+eFIE66CKLQ0SH3vMAzm8SPDlJaSrfOKlKVioiKk1kEF6Fgh6LSFgdnJwURBzGoiDqE5N5TgsStmziHfJAjDxKJId/2pYO5yx3euef/45zz/vcS9nnRPutjCvD/VcAYsyoij1uzN9EKMPNlANuqer0FMTGARCKR9jzvAxFtWWuvTLQCQRAcqVarHz3P2y2XywulUqkyUQBmfgkgqaoLIrLT7j2Rt4CZ1wDcUdUlEXnVaXyRAhhjVohoU1Vvich6N9eNDMD3/TOqmlXVDRG50cvyIwEwxhwloi9EtGOtne9330QCwMxvAJwAcN4592OiAMwc9vomgDnn3NtBt+2eVoCZrwF4AmDVORfuA9cfAN/3U6q66Jy7P/BUlwBjzCwRvVPVRyJye9gc7QDzqvqCiF5ba5eHTRDGBUFwrFar5QB8c84tjnL2rxYkk8mTjUbjGYAD9Xo9XSwWfw2TjJnfAzjued5soVDYHeZMTytOpVKHKpXKFoBlIjplrf3cLyEzPwVwlYjOWWuzo4iHsT2HkJkfALinqhdE5Hm3xMwcTvu6qq6IyPao4n0Bwo++719S1U0AD51zmXYBY8wcEYX/+5pz7u444gMBmhBnVTV8wUgsFsvk8/nviURixvM8CyDrnFsaV3wogDCoKbgBYAZAhogyqno4Ho+fzuVyPyMHaAk0XS58zRxU1bSIfPoX8aEr0NH7iwC+dj4sxgXZUyseB2IKMK3Abyw60SGQDkiKAAAAAElFTkSuQmCC');
        background-size: 100% 100%;
    }
    
    .item-container {
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 10px;
        font-size: 14px;
        border-top: 0;
    }
    
    .item__main {
        width: 90%;
        margin: 0 8px;
    }
    
    .item__main__text {
        display: block;
        word-break: break-all;
    }
    
    .item__main__date {
        display: inline-block;
        padding: 2px 2px 0 0;
        font-size: 10px;
        color: #ff8c00;
    }
    
    .item__main__time {
        display: inline-block;
        padding: 2px 2px 0 0;
        font-size: 10px;
        color: #ff8c00;
    }
    
    .donelist .item-container:last-of-type {
        border-radius: 0 0 4px 4px;
    }
    
    .list--done {
        border-radius: 0 0 4px 4px;
    }
    
    .end-text {
        color: #515151;
    }
    
    .modal {
        position: absolute;
        top: 100px;
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 85%;
        font-size: 14px;
        border-radius: 2px;
        background: #fff;
        z-index: 1001;
    }
    
    .modal__mask {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.45);
        z-index: 1000;
    }
    
    .modal__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 15px;
        padding: 20px 14px;
        color: rgba(0, 0, 0, 0.65);
        border-bottom: 1px solid #d9d9d9;
        z-index: 1;
    }
    
    .modal__body {
        display: flex; 
        margin:10px;
        margin-top: 0;
        justify-content: flex-end;
        border-radius: 0 0 2px 2px;
    }

    .ant-time-picker {
        margin-left:10px;
    }
    
    .modal__input {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .ant-picker {
        margin: 20px 20px 0 0;
    }

    .todo-input {
        width: 100%;
        height: 90px;
        padding: 5px;
        margin: 10px;
        border: 1px solid #d9d9d9;
        border-radius: 2px;
    }
    
    .modal__footer {
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid #d9d9d9;
        border-radius: 0 0 2px 2px;
    }
    
    .btn {
        display: inline-block;
        margin: 10px;
        margin-left: 0;
        padding: 4px 14px !important;
        color: rgba(0, 0, 0, 0.65);
        border-radius: 2px;
        background: #fff;
        border: 1px solid #d9d9d9;
        box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
        cursor: pointer;
    }
    
    .confirm-btn {
        color: white;
        background-color: #1890ff;
        border-color: #1890ff;
    }
</style>
