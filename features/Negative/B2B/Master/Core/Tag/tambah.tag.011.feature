# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah011
Feature: Negative Menambah Master Tag (tambah.tag.011)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi Data mengisi Remarks dengan spasi saja
    Given Login B2B berhasil (011)
    And Pergi ke menu Master (011)
    And Pergi ke menu Core (011)
    And Pergi ke menu Tag (011)
    When Muncul list tag (011)
    And Klik Create New (011)
    And Mengisi semua Data, Pada Remarks diisi dengan spasi saja (011)
    Then Klik Save, data tidak berhasil disimpan (011)