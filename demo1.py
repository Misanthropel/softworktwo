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
    return str
list=[5,4,4,4,5,4]
print(judge(list))