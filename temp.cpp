#include <iostream>
#include <vector>
using namespace std;


int main(){
    int arr[10]={2,3,5,6,8,9,10,11,13,14};
    vector<int> ans; 
            if(arr[0]!=1){
            ans.push_back(1);
        }  
    for(int i = 0 ; i<9 ; i++){

        if(arr[i+1]!=arr[i]+1){
            ans.push_back(arr[i]+1);
        }
    }
    //ans.pop_back();
    for(int j = 0 ; j<ans.size();j++){
        cout<<ans[j]<<endl;
    }
    return 0;
}