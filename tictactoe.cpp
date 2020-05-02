#include <iostream>
#include<conio.h>
using namespace std;
int pos,Player=1,k;
char a[9]={'1','2','3','4','5','6','7','8','9'};
char t,mark;
char check()
{
    if(a[0]==a[1]&&a[1]==a[2])
        return a[0];
    else if(a[3]==a[4]&&a[4]==a[5])
        return a[3];
    else if(a[6]==a[7]&&a[7]==a[8])
        return a[6];
    else if(a[3]==a[4]&&a[4]==a[5])
        return a[3];
    else if(a[0]==a[3]&&a[3]==a[6])
        return a[0];
    else if(a[1]==a[4]&&a[4]==a[7])
        return a[1];
    else if(a[2]==a[5]&&a[5]==a[8])
        return a[2];
    else if(a[0]==a[4]&&a[4]==a[8])
        return a[0];
    else if(a[2]==a[4]&&a[4]==a[6])
        return a[2];
    else if(a[0]!='1'&&a[1]!='2'&&a[2]!='3'&&a[3]!='4'&&a[4]!='5'&&a[5]!='6'&&a[6]!='7'&&a[7]!='8'&&a[8]!='9')
        return 'd';
    else
        return 'e';
}
void printmat()
{
    cout<<endl<<a[0]<<"  |  "<<a[1]<<"  |  "<<a[2]<<endl;
    cout<<"--------------"<<endl;
    cout<<a[3]<<"  |  "<<a[4]<<"  |  "<<a[5]<<endl;
    cout<<"--------------"<<endl;
    cout<<a[6]<<"  |  "<<a[7]<<"  |  "<<a[8]<<endl<<endl<<endl;
}
int main()
{
    while(k!=100)
    {
        printmat();
        cout<<"Arre Player "<<Player<<" konsi position pe daaloge"<<endl;
        cin>>pos;
        mark=(Player==1)?'O':'X';
        if(pos==1&&a[0]=='1')
            a[0]=mark;
        else if(pos==2&&a[1]=='2')
            a[1]=mark;
         else if(pos==3&&a[2]=='3')
            a[2]=mark;
        else if(pos==4&&a[3]=='4')
            a[3]=mark;
         else if(pos==5&&a[4]=='5')
            a[4]=mark;
         else if(pos==6&&a[5]=='6')
            a[5]=mark;
         else if(pos==7&&a[6]=='7')
            a[6]=mark;
         else if(pos==8&&a[7]=='8')
            a[7]=mark;
         else if(pos==9&&a[8]=='9')
            a[8]=mark;
            else
                cout<<"Invalid Input";
            t=check();
            if(t!='e')
            {
                if(t=='O')
                    cout<<"Player 1 wins";
                else if (t=='X')
                    cout<<"Player 2 wins";
                else
                    cout<<"Draw hai BC";
                k=100;
            }
            Player=(Player==1)?2:1;
    }
    return 0;
}
