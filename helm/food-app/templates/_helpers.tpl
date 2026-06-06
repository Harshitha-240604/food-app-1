{{- define "food-app.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "food-app.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
