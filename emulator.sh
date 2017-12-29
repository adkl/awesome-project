#!/bin/bash
 
ANDROID_HOME=/Users/adkl/Library/Android/sdk
AVD_NAME=Nexus_5X_API_26_x86
 
if [ $# -gt 0 ]; then
        AVD_NAME=$1
        shift
fi
 
pushd ${ANDROID_HOME}/tools
./emulator -avd ${AVD_NAME} $* &
popd