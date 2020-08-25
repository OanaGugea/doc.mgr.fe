import { Component, OnInit } from "@angular/core";

@Component({
  selector: "vanzari",
  templateUrl: "./vanzari.component.html",
  styleUrls: ["./vanzari.component.css"],
})
export class VanzariComponent implements OnInit {
  public clienti = [
    "Client 1",
    "Client 2",
    "Client 3",
    "Client 4",
    "Client 5",
    "Client 6",
    "Client 7",
  ];
  public alerta = [
    "Alerta 1",
    "Alerta 2",
    "Alerta 3",
    "Alerta 4",
    "Alerta 5",
    "Alerta 6",
    "Alerta 7",
  ];
  public observatie = [
    "Observatie 1",
    "Observatie 2",
    "Observatie 3",
    "Observatie 4",
    "Observatie 5",
    "Observatie 6",
    "Observatie 7",
  ];
  public sarcina = [
    "Sarcina 1",
    "Sarcina 2",
    "Sarcina 3",
    "Sarcina 4",
    "Sarcina 5",
    "Sarcina 6",
    "Sarcina 7",
  ];

  constructor() {}

  ngOnInit(): void {}
}
