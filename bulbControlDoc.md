# AndroidDM solution app Api documentation v0.1.0

Documentation for the REST api access provided at AndroidDM solution app

- [deviceApi](#deviceapi)
	- [Read data of device](#read-data-of-device)
	- [Read data of online device by group](#read-data-of-online-device-by-group)
	
- [deviceGroupApi](#devicegroupapi)
	- [Read data of device group](#read-data-of-device-group)
	
- [solutionAppStatus](#solutionappstatus)
	- [batch delete solution app status by ids](#batch-delete-solution-app-status-by-ids)
	- [delete all solution app status](#delete-all-solution-app-status)
	- [delete solution app status by device id](#delete-solution-app-status-by-device-id)
	- [delete solution app status by device group](#delete-solution-app-status-by-device-group)
	- [delete solution app status by type](#delete-solution-app-status-by-type)
	- [delete solution app status by id](#delete-solution-app-status-by-id)
	- [get solution app status](#get-solution-app-status)
	- [get solution app by page and status in a device group](#get-solution-app-by-page-and-status-in-a-device-group)
	- [get solution app by page in a device group](#get-solution-app-by-page-in-a-device-group)
	- [get solution app status of a device](#get-solution-app-status-of-a-device)
	- [get solution app status in a device group](#get-solution-app-status-in-a-device-group)
	- [get solution app status](#get-solution-app-status)
	- [get solution app status overview](#get-solution-app-status-overview)
	
- [solutionApp](#solutionapp)
	- [Read batch set solution app value](#read-batch-set-solution-app-value)
	- [get solution app value](#get-solution-app-value)
	- [reset solution app value](#reset-solution-app-value)
	- [set solution app value](#set-solution-app-value)
	


# deviceApi

## Read data of device

<p>get devices</p>

	POST /api/devicemgr


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>group name</p>							|

## Read data of online device by group

<p>get online devices by group name</p>

	POST /api/devicemgr/getonlinedevicebygroup


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| gname			| String			|  <p>group name</p>							|

# deviceGroupApi

## Read data of device group

<p>get device group</p>

	POST /api/groupmgr/all


# solutionAppStatus

## batch delete solution app status by ids

<p>batch delete solution app status by ids</p>

	POST /api/solutionAppStatus/batchdDelete


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| sasids			| String			|  <p>JSON type: sasids</p>							|

## delete all solution app status

<p>delete all solution app status</p>

	DELETE /api/solutionAppStatus


## delete solution app status by device id

<p>delete solution app status by device id</p>

	POST /api/solutionAppStatus/deleteByDevId


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| endpoint			| String			|  <p>device id</p>							|
| type			| String			|  <p>solution app status package name</p>							|

## delete solution app status by device group

<p>delete solution app status by device group</p>

	POST /api/solutionAppStatus/deleteByGroup


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| groupname			| String			|  <p>device group name</p>							|
| type			| String			|  <p>solution app status package name</p>							|

## delete solution app status by type

<p>delete solution app status by type</p>

	DELETE /api/solutionAppStatus/byType/:type


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| type			| String			|  <p>solution app status package name</p>							|

## delete solution app status by id

<p>delete solution app status by id</p>

	DELETE /api/solutionAppStatus/:sasid


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| id			| Number			|  <p>of solution app status</p>							|

## get solution app status

<p>get value of solution app status</p>

	GET /api/solutionAppStatus/status


## get solution app by page and status in a device group

<p>get your solution app status</p>

	GET /api/solutionAppStatus/byType


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| type			| String			|  <p>solution app package name</p>							|
| groupname			| String			|  <p>device group name</p>							|
| currentpage			| Number			|  <p>current page</p>							|
| Maximum			| Number			|  <p>number of bars displayed on one page</p>							|
| JSON			| String			|  <p>type: solution app status result, running:0, fail:1 success:2,example:[0,1]</p>							|

## get solution app by page in a device group

<p>get your solution app status</p>

	GET /api/solutionAppStatus/byType


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| type			| String			|  <p>solution app package name</p>							|
| groupname			| String			|  <p>device group name</p>							|
| currentpage			| Number			|  <p>current page</p>							|
| Maximum			| Number			|  <p>number of bars displayed on one page</p>							|

## get solution app status of a device

<p>get value of solution app status of a device</p>

	GET /api/solutionAppStatus/byAgentId


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| agentId			| String			|  <p>endpoint id of device</p>							|
| type			| String			|  <p>solution app package name</p>							|

## get solution app status in a device group

<p>get your solution app status</p>

	GET /api/solutionAppStatus/byGroupname


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| groupname			| String			|  <p>device group name</p>							|
| type			| String			|  <p>solution app package name</p>							|

## get solution app status

<p>get your solution app status</p>

	GET /api/solutionAppStatus/byType


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| type			| String			|  <p>solution app package name</p>							|

## get solution app status overview

<p>get your solution app status overview</p>

	GET /api/solutionAppStatus/overview


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| taskname			| String			|  <p>solution app package name</p>							|

# solutionApp

## Read batch set solution app value

<p>get value of solution app</p>

	POST /api/solutionApp/batchdeploy/${sensorId}


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| sensorId			| String			|  <p>defined lwm2m value example 2/0/5</p>							|
| taskname			| String			|  <p>the name of batch set solution app value</p>							|
| endpoint			| String			|  <p>endpoint id of device</p>							|
| funcid			| String			|  <p>defined by solution app</p>							|
| appname			| String			|  <p>solution app package name</p>							|
| value			| String			|  <p>data to send to solution app</p>							|

## get solution app value

<p>get value of solution app</p>

	GET /api/solutionApp/${agentId}/${sensorId}


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| agentId			| String			|  <p>endpoint id of device</p>							|
| sensorId			| String			|  <p>defined lwm2m value example 2/0/5</p>							|
| funcid			| String			|  <p>defined by solution app</p>							|
| appname			| String			|  <p>solution app package name</p>							|
| param			| String			|  <p>data to send to solution app</p>							|

## reset solution app value

<p>get value of solution app</p>

	POST /api/solutionApp/redeploy/${sensorId}


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| agentId			| String			|  <p>endpoint id of device</p>							|
| sensorId			| String			|  <p>defined lwm2m value example 2/0/5</p>							|
| funcid			| String			|  <p>defined by solution app</p>							|
| taskname			| String			|  <p>the name of reset</p>							|
| endpoint			| String			|  <p>endpoint id of device</p>							|
| appname			| String			|  <p>solution app package name</p>							|
| param			| String			|  <p>data to send to solution app</p>							|

## set solution app value

<p>set value of solution app</p>

	PUT /api/solutionApp/${agentId}/${sensorId}


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| agentId			| String			|  <p>endpoint id of device</p>							|
| sensorId			| String			|  <p>defined lwm2m value example 2/0/5</p>							|
| id			| String			|  <p>resource id of lwm2m value example 5</p>							|
| value			| String			|  <p>data to send to solution app,format:{ appname: this.pkgname, funcid: this.funcIds.setLedColor, param: this.bulbColor }</p>							|


