# Feature: Positive B2B Tambah Master Tag di menu Master > Core > Tag

#   Scenario: Login ke B2B dan tambah Master > Core > Tag
#     Given Saya login ke B2B dan ke Menu Master > Core > Tag
#     Then Saat save master tag harus berhasil
@negtambah014
Feature: Negative Menambah Master Tag (tambah.tag.014)

  Scenario: Negative Menambahkan Tag Baru di Master Tag Mengisi sebagian data dengan benar dan ganti url ke dashboard
    Given Login B2B berhasil (014)
    And Pergi ke menu Master (014)
    And Pergi ke menu Core (014)
    And Pergi ke menu Tag (014)
    When Muncul list tag (014)
    And Klik Create New (014)
    And Mengisi sebagian data dengan benar dan ganti url ke dashboard (014)
    Then Klik Save, data tidak berhasil disimpan (014)