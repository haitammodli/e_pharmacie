package com.example.deliveryservice.services;

import com.example.deliveryservice.dto.GeoResponse;
import com.example.deliveryservice.models.Delivery;
import com.example.deliveryservice.repositories.DeliveryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.time.Duration;

@Service
@RequiredArgsConstructor
public class DeliveryService {

    private final DeliveryRepository deliveryRepository;
    private final WebClient webClient;

    public Delivery createDelivery(Delivery delivery) {


        GeoResponse[] geo = webClient.get()
                .uri("https://nominatim.openstreetmap.org/search?format=json&q=" + delivery.getAddress())
                .retrieve()
                .bodyToMono(GeoResponse[].class)
                .timeout(Duration.ofSeconds(3))
                .onErrorReturn(new GeoResponse[0])
                .block();

        if (geo != null && geo.length > 0) {
            delivery.setLatitude(Double.parseDouble(geo[0].getLat()));
            delivery.setLongitude(Double.parseDouble(geo[0].getLon()));
            delivery.setEstimatedTime("30 minutes");
        } else {
            delivery.setLatitude(0);
            delivery.setLongitude(0);
            delivery.setEstimatedTime("Unknown");
        }

        delivery.setStatus("PENDING");

        return deliveryRepository.save(delivery);
    }

    public Delivery getDelivery(Long id) {
        return deliveryRepository.findById(id).orElse(null);
    }
}

