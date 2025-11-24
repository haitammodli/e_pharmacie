package com.example.deliveryservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class GeoResponse {
    private String lat;
    private String lon;
    private String estimatedTime;
}
