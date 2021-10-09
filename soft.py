import random
from flask import Flask,jsonify
app = Flask(__name__)
jilu=[]
cntt=1
def play(name,num):
    flag=0
    global cntt
    if len(jilu) == 0:
        jilu.append([name,num,cntt])
        flag=1
    else:
        for i in range(0,len(jilu)):
            if num > jilu[i][1]:
                jilu.insert(i,[name,num,cntt])
                flag=1
                break
    if flag == 0:
        jilu.append([name,num,cntt])
    cntt+=1

def judge(list):#判断博饼的点数
    tou=[]
    cnt=0
    for i in range(0,len(list)):
        tou.append(list.count(i+1))
    print(tou)
    flag=0
    for j in range(0,len(list)):
        if tou[j] == 6:
            if j == 0:
                str = "遍地锦"
                flag=1
                cnt=2.1
            elif j == 3:
                str = "六勃红"
                flag = 1
                cnt=2.2
            else:
                str = "六勃黑"
                k=j/100
                flag = 1
                cnt=2.0+k
            break
        elif tou[j] == 5:
            if j == 3:
                str="五红"
                flag = 1
                cnt=1.9
                for t in range(0, len(list)):
                    if tou[t] == 1:
                        cnt = cnt+(t+1)/100
                        break
            else:
                str="五子登科"
                flag = 1
                cnt=1.8
                for t in range(0,len(list)):
                    if tou[t] == 1:
                        cnt=cnt+(t+1)/100
                        break
            break
        elif tou[j] == 4:
            if j == 3:
                if tou[0] == 2:
                    str="状元插金花"
                    flag = 1
                    cnt=2.3
                else:
                    str="状元"
                    flag = 1
                    cnt=1.6
                    k=0
                    for t in range(0,len(list)):
                        if tou[t] >= 1 and tou[t] <= 2:
                            k=k+t+1
                    cnt=cnt+(k/100)
            break
    if flag == 0:
        jishu=0
        for j in range(0,len(list)):
            if tou[j] == 1:
                jishu+=1
        if jishu == 6:
            str="对堂"
            cnt=1.4
        if tou[3] == 3:
            str="三红"
            cnt=1.5
        else:
            flag1=0
            for j in range(0,len(list)):
                if tou[j] == 4:
                    str="四进"
                    flag1=1
                    cnt=1.3
                    break
                elif tou[3] == 2:
                    str="二拳"
                    flag1 = 1
                    cnt=1.2
                    break
                elif tou[3] == 1:
                    str="一秀"
                    flag1 = 1
                    cnt=1.1
                    break
            if flag1 == 0:
                str="无用"
                cnt=1.0
    play(str,cnt)
    return str

@app.route('/')
def hello():
    return "Hello"
@app.route('/touzi')#采用flask框架，将骰子点数返回给前端
def toutou():
    touzi=dict(first=random.randint(1,6),
          second=random.randint(1,6),
          third=random.randint(1,6),
          forth=random.randint(1,6),
          fifth=random.randint(1,6),
          sixth=random.randint(1,6),)
    s=judge(list(touzi.values()))
    app.config['JSON_AS_ASCII'] = False
    touzi["奖项"]=s
    return jsonify(touzi)
@app.route('/touzi/paihang')#采用flask框架，返回排行
def player():
    return jsonify(jilu)

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8088)
